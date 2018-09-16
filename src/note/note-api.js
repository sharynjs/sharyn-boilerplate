// @flow

import Joi from 'joi'
import uuid from 'uuid/v4'
import { gql } from 'apollo-server-koa'
import { noteInputSchema } from 'note/note-schemas'
import { createNote, findNote, getAllNotes, updateNote, deleteNote } from 'note/note-db'
import { swit } from 'sharyn/util'

export const typeDef = gql`
  input NoteInput {
    title: String!
    description: String
  }
  type Note {
    id: ID!
    title: String!
    description: String
  }
  type InvalidField {
    name: String!
    message: String!
  }
  type NoteInputResult {
    note: Note
    invalidFields: [InvalidField]
  }
  type Query {
    getNotes: [Note]
    getNote(id: ID!): Note
  }
  type Mutation {
    createNote(input: NoteInput!): NoteInputResult
    updateNote(id: ID!, input: NoteInput!): Note
    deleteNote(id: ID!): Boolean
  }
`

const validateNoteInput = async input => {
  const result = Joi.validate(input, noteInputSchema)
  if (result.error) {
    return {
      invalidFields: result.error.details.map(e => ({
        name: e.path.toString(),
        message: swit(`${e.path.toString()}/${e.type}`, [
          ['title/string.max', 'The title must be shorter than 20 characters'],
        ]),
      })),
    }
  }
  return false
}

const getUserIdOrThrow = (ctx: Object) => {
  const userId = ctx.session?.user?.id
  if (!userId) {
    throw Error('Requires being logged in')
  }
  return userId
}

export const resolvers = {
  Query: {
    getNotes: (root: Object, args: Object, ctx: Object) => getAllNotes(getUserIdOrThrow(ctx)),
    getNote: (root: Object, args: Object, ctx: Object) => findNote(getUserIdOrThrow(ctx), args.id),
  },
  Mutation: {
    createNote: async (root: Object, args: Object, ctx: Object) =>
      (await validateNoteInput(args.input)) || {
        note: createNote(getUserIdOrThrow(ctx), uuid(), args.input),
      },

    updateNote: (root: Object, args: Object, ctx: Object) =>
      validateNoteInput(args.input) || {
        note: updateNote(getUserIdOrThrow(ctx), args.id, args.input),
      },
    deleteNote: (root: Object, args: Object, ctx: Object) =>
      deleteNote(getUserIdOrThrow(ctx), args.id),
  },
}

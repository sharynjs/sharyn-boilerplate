// @flow

import { gql } from 'apollo-server-koa'
import uuid from 'uuid/v4'

import { createNote, findNote, getAllNotes, updateNote, deleteNote } from 'note/note-db'
import { validateNoteInput } from 'note/note-validations'

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
    updatedNote: Note
    invalidFields: [InvalidField]
  }
  type Query {
    getNotes: [Note]
    getNote(id: ID!): Note
  }
  type Mutation {
    createNote(input: NoteInput!): NoteInputResult
    updateNote(id: ID!, input: NoteInput!): NoteInputResult
    deleteNote(id: ID!): Boolean
  }
`

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
    createNote: async (root: Object, args: Object, ctx: Object) => {
      const invalidFields = validateNoteInput(args.input)
      return invalidFields
        ? { invalidFields }
        : {
            note: createNote(getUserIdOrThrow(ctx), uuid(), args.input),
          }
    },
    updateNote: async (root: Object, args: Object, ctx: Object) => {
      const invalidFields = validateNoteInput(args.input)
      return invalidFields
        ? { invalidFields, note: await findNote(getUserIdOrThrow(ctx), args.id) }
        : {
            updatedNote: await updateNote(getUserIdOrThrow(ctx), args.id, args.input),
          }
    },
    deleteNote: (root: Object, args: Object, ctx: Object) =>
      deleteNote(getUserIdOrThrow(ctx), args.id),
  },
}

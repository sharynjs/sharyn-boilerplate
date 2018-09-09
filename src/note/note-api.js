// @flow

import uuid from 'uuid/v4'
import { gql } from 'apollo-server-koa'
import { createNote, findNote, getAllNotes, updateNote, deleteNote } from 'note/note-db'

export const typeDef = gql`
  input NoteInput {
    title: String
    description: String
  }
  type Note {
    id: ID!
    title: String!
    description: String
  }
  type Query {
    getNotes: [Note]
    getNote(id: ID!): Note
  }
  type Mutation {
    createNote(input: NoteInput): Note
    updateNote(id: ID!, input: NoteInput): Note
    deleteNote(id: ID!): Boolean
  }
`

const validateNoteInput = input => {
  if (input.title.length > 20) {
    throw Error('The title should be shorter than 20 characters')
  }
  return input
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
    createNote: (root: Object, args: Object, ctx: Object) =>
      createNote(getUserIdOrThrow(ctx), uuid(), validateNoteInput(args.input)),
    updateNote: (root: Object, args: Object, ctx: Object) =>
      updateNote(getUserIdOrThrow(ctx), args.id, validateNoteInput(args.input)),
    deleteNote: (root: Object, args: Object, ctx: Object) =>
      deleteNote(getUserIdOrThrow(ctx), args.id),
  },
}

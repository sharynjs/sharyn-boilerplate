// @flow

import parseObject from 'sharyn/util/parse-object'

import { NOTES_PATH, notePath } from 'note/note-paths'

export const getNotesCall = {
  query: '{ getNotes { id, title, description } }',
  mapRespData: ({ getNotes }: Object) => ({ notes: getNotes }),
}

export const getNoteCall = {
  query: 'query ($id: ID!) { getNote(id: $id) { id, title, description } }',
  variables: ({ id }: Object) => ({ id }),
  mapRespData: ({ getNote }: Object) => ({ note: getNote }),
}

export const createNoteCall = {
  query:
    'mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }',
  variables: (urlParams: Object, fields: Object) => ({ input: parseObject(fields) }),
  mapRespData: ({ createNote: result }: { createNote: Object }) => ({
    createdNoteId: result?.note?.id,
    invalidFields: result?.invalidFields ?? undefined,
  }),
  successRedirect: ({ createdNoteId }: Object) => notePath(createdNoteId),
}

export const updateNoteCall = {
  query:
    'mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id, title, description }, updatedNote { id }, invalidFields { name, message } } }',
  variables: ({ id }: Object, fields: Object) => ({ id, input: parseObject(fields) }),
  mapRespData: ({ updateNote: result }: Object) => ({
    note: result?.note,
    updatedNoteId: result?.updatedNote?.id,
    invalidFields: result?.invalidFields ?? undefined,
  }),
  successRedirect: ({ updatedNoteId }: Object) => notePath(updatedNoteId),
}

export const deleteNoteCall = {
  query: 'mutation ($id: ID!) { deleteNote(id: $id) }',
  variables: ({ id }: Object) => ({ id }),
  successRedirect: NOTES_PATH,
}

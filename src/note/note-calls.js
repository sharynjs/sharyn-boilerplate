// @flow

import parseObject from 'sharyn/util/parse-object'

import { NOTES_PATH, notePath } from 'note/note-paths'

export const getNotesCall = {
  query: '{ getNotes { id, title, description } }',
  mapResp: ({ getNotes: notes }: { getNotes: Object }) => ({ notes }),
}

export const getNoteCall = {
  query: 'query ($id: ID!) { getNote(id: $id) { id, title, description } }',
  mapResp: ({ getNote: note }: { getNote: Object }) => ({ note }),
}

export const createNoteCall = {
  query:
    'mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }',
  mapFields: (fields: Object) => ({ input: parseObject(fields) }),
  mapResp: ({ createNote: result }: { createNote: Object }) => ({
    createdNoteId: result?.note?.id,
    invalidFields: result?.invalidFields,
  }),
  successRedirect: ({ createdNoteId }: { createdNoteId: string }) => notePath(createdNoteId),
}

export const updateNoteCall = {
  query:
    'mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id, title, description }, updatedNote { id }, invalidFields { name, message } } }',
  mapFields: (fields: Object) => ({ input: parseObject(fields) }),
  mapResp: ({ updateNote: result }: { updateNote: Object }) => ({
    note: result?.note,
    updatedNoteId: result?.updatedNote?.id,
    invalidFields: result?.invalidFields,
  }),
  successRedirect: ({ updatedNoteId }: { updatedNoteId: string }) => notePath(updatedNoteId),
}

export const deleteNoteCall = {
  query: 'mutation ($id: ID!) { deleteNote(id: $id) }',
  successRedirect: NOTES_PATH,
}

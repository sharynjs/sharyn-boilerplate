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
  }),
  successRedirect: ({ createdNoteId }: { createdNoteId: string }) => notePath(createdNoteId),
}

export const updateNoteCall = {
  query:
    'mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id }, invalidFields { name, message } } }',
  mapFields: (fields: Object) => ({ input: parseObject(fields) }),
  mapResp: ({ updateNote: result }: { updateNote: Object }) => ({
    updatedNoteId: result?.note?.id,
  }),
  successRedirect: ({ updatedNoteId }: { updatedNoteId: string }) => notePath(updatedNoteId),
}

export const deleteNoteCall = {
  query: 'mutation ($id: ID!) { deleteNote(id: $id) }',
  successRedirect: NOTES_PATH,
}

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
  mapArgs: (fields: Object) => ({ input: parseObject(fields) }),
  mapResp: ({ createNote: result }: { createNote: Object }) => ({ note: result?.note }),
  successRedirect: ({ note }: { note: Object }) => notePath(note?.id),
}

export const updateNoteCall = {
  query:
    'mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id }, invalidFields { name, message } } }',
  mapArgs: (fields: Object, { id }: { id: string }) => ({ id, input: parseObject(fields) }),
  mapResp: ({ updateNote: result }: { updateNote: Object }) => ({ note: result?.note }),
  successRedirect: ({ note }: { note: Object }) => notePath(note?.id),
}

export const deleteNoteCall = {
  query: 'mutation ($id: ID!) { deleteNote(id: $id) }',
  mapArgs: (fields: Object, { id }: { id: string }) => ({ id }),
  successRedirect: NOTES_PATH,
}

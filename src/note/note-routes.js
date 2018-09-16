// @flow

import NotesIcon from '@material-ui/icons/Description'
import NewIcon from '@material-ui/icons/Create'
import parseObject from 'sharyn/util/parse-object'

export const notesRoute: Object = {
  path: '/',
  exact: true,
  loggedInOnly: true,
  title: 'Notes',
  Icon: NotesIcon,
  mainQuery: {
    query: '{ getNotes { id, title, description } }',
    mapResp: ({ getNotes: notes }) => ({ notes }),
  },
}

export const noteRoute: Object = {
  path: (id: ?string) => `/note/${id || ':id'}`,
  exact: true,
  loggedInOnly: true,
  title: ({ note }) => note?.title ?? 'Note not found',
  mainQuery: {
    query: 'query ($id: ID!) { getNote(id: $id) { id, title, description } }',
    mapResp: ({ getNote: note }) => ({ note }),
  },
}

export const newNoteRoute: Object = {
  path: '/new-note',
  exact: true,
  loggedInOnly: true,
  title: 'New Note',
  Icon: NewIcon,
  mainMutation: {
    name: 'createNote',
    query:
      'mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }',
    mapFields: fields => ({ input: parseObject(fields) }),
    successRedirect: notesRoute.path,
  },
}

export const deleteNoteRoute: Object = {
  path: (id: ?string) => `/note/delete/${id || ':id'}`,
  exact: true,
  loggedInOnly: true,
  mainMutation: {
    query: 'mutation ($id: ID!) { deleteNote(id: $id) }',
    mapFields: (fields, { id }) => ({ id }),
    successRedirect: notesRoute.path,
  },
}

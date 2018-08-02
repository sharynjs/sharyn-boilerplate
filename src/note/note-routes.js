// @flow

import NotesIcon from '@material-ui/icons/Description'
import NewIcon from '@material-ui/icons/Create'

export const notesRoute: Object = {
  path: '/',
  exact: true,
  loggedInOnly: true,
  title: 'Notes',
  Icon: NotesIcon,
}

export const noteRoute: Object = {
  path: (id: ?string) => `/note/${id || ':id'}`,
  exact: true,
  loggedInOnly: true,
  title: ({ data }) => data?.note?.title ?? 'Note not found',
}

export const newNoteRoute: Object = {
  path: '/new-note',
  exact: true,
  loggedInOnly: true,
  title: 'New Note',
  Icon: NewIcon,
}

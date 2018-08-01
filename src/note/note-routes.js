// @flow

import NotesIcon from '@material-ui/icons/Description'
import NewIcon from '@material-ui/icons/Create'

export const notesRoute: Object = {
  path: '/',
  exact: true,
  loggedInOnly: true,
  title: 'Notes',
  Icon: NotesIcon,
  inNav: true,
}

export const noteRoute: Object = {
  path: (id: ?string) => `/note/${id || ':id'}`,
  exact: true,
  title: ({ page }) => page?.note?.title ?? 'Note not found',
}

export const newNoteRoute: Object = {
  path: '/new-note',
  exact: true,
  title: 'New Note',
  Icon: NewIcon,
}

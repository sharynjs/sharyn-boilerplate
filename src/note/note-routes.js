// @flow

import NotesIcon from '@material-ui/icons/Description'
import NewIcon from '@material-ui/icons/Create'
import {
  getNotesCall,
  getNoteCall,
  createNoteCall,
  updateNoteCall,
  deleteNoteCall,
} from 'note/note-calls'
import { NOTES_PATH, NEW_NOTE_PATH, notePath, editNotePath, deleteNotePath } from 'note/note-paths'
import NotesPage from 'note/cmp-page/NotesPage'
import NotePage from 'note/cmp-page/NotePage'
import EditNotePage from 'note/cmp-page/EditNotePage'
import NewNotePage from 'note/cmp-page/NewNotePage'

export const notesRoute: Object = {
  path: NOTES_PATH,
  exact: true,
  loggedInOnly: true,
  pageComponent: NotesPage,
  title: 'Notes',
  icon: NotesIcon,
  mainQuery: getNotesCall,
}

export const noteRoute: Object = {
  path: notePath,
  exact: true,
  loggedInOnly: true,
  pageComponent: NotePage,
  title: ({ data }) => data?.note?.title ?? 'Note not found',
  backNav: notesRoute.path,
  mainQuery: getNoteCall,
}

export const newNoteRoute: Object = {
  path: NEW_NOTE_PATH,
  exact: true,
  loggedInOnly: true,
  pageComponent: NewNotePage,
  title: 'New Note',
  backNav: notesRoute.path,
  icon: NewIcon,
  mainMutation: createNoteCall,
}

export const editNoteRoute: Object = {
  path: editNotePath,
  exact: true,
  loggedInOnly: true,
  pageComponent: EditNotePage,
  title: ({ data }) => (data?.note?.title ? `Edit ${data?.note?.title}` : 'Note not found'),
  backNav: ({ data }) => noteRoute.path(data?.note?.id),
  icon: NewIcon,
  mainQuery: getNoteCall,
  mainMutation: updateNoteCall,
}

export const deleteNoteRoute: Object = {
  path: deleteNotePath,
  exact: true,
  loggedInOnly: true,
  mainMutation: deleteNoteCall,
}

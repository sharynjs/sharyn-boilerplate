// @flow

import NotesIcon from '@material-ui/icons/Description'
import NewIcon from '@material-ui/icons/Create'

import EditNotePage from 'note/cmp-page/EditNotePage'
import NewNotePage from 'note/cmp-page/NewNotePage'
import NotePage from 'note/cmp-page/NotePage'
import NotesPage from 'note/cmp-page/NotesPage'
import {
  createNoteCall,
  deleteNoteCall,
  getNoteCall,
  getNotesCall,
  updateNoteCall,
} from 'note/note-calls'
import { NOTES_PATH, NEW_NOTE_PATH, notePath, editNotePath, deleteNotePath } from 'note/note-paths'

export const notesRoute = {
  path: NOTES_PATH,
  exact: true,
  loggedInOnly: true,
  pageComponent: NotesPage,
  title: 'Notes',
  icon: NotesIcon,
  mainQuery: getNotesCall,
}

export const noteRoute = {
  path: notePath,
  exact: true,
  loggedInOnly: true,
  pageComponent: NotePage,
  title: ({ data }: Object) => data?.note?.title ?? 'Note not found',
  backNav: notesRoute.path,
  mainQuery: getNoteCall,
}

export const newNoteRoute = {
  path: NEW_NOTE_PATH,
  exact: true,
  loggedInOnly: true,
  pageComponent: NewNotePage,
  title: 'New Note',
  backNav: notesRoute.path,
  icon: NewIcon,
  mainMutation: createNoteCall,
}

export const editNoteRoute = {
  path: editNotePath,
  exact: true,
  loggedInOnly: true,
  pageComponent: EditNotePage,
  title: ({ data }: Object) => (data?.note?.title ? `Edit ${data?.note?.title}` : 'Note not found'),
  backNav: ({ data }: Object) => noteRoute.path(data?.note?.id),
  icon: NewIcon,
  mainQuery: getNoteCall,
  mainMutation: updateNoteCall,
}

export const deleteNoteRoute = {
  path: deleteNotePath,
  exact: true,
  loggedInOnly: true,
  mainMutation: deleteNoteCall,
}

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

export const notesRoute: Object = {
  path: NOTES_PATH,
  exact: true,
  loggedInOnly: true,
  title: 'Notes',
  Icon: NotesIcon,
  mainQuery: getNotesCall,
}

export const noteRoute: Object = {
  path: notePath,
  exact: true,
  loggedInOnly: true,
  title: ({ data }) => data?.note?.title ?? 'Note not found',
  backNav: notesRoute.path,
  mainQuery: getNoteCall,
}

export const newNoteRoute: Object = {
  path: NEW_NOTE_PATH,
  exact: true,
  loggedInOnly: true,
  title: 'New Note',
  backNav: notesRoute.path,
  Icon: NewIcon,
  mainMutation: createNoteCall,
}

export const editNoteRoute: Object = {
  path: editNotePath,
  exact: true,
  loggedInOnly: true,
  title: ({ data }) => (data?.note?.title ? `Edit ${data?.note.title}` : 'Note not found'),
  backNav: ({ data }) => noteRoute.path(data?.note.id),
  Icon: NewIcon,
  mainQuery: getNoteCall,
  mainMutation: updateNoteCall,
}

export const deleteNoteRoute: Object = {
  path: deleteNotePath,
  exact: true,
  loggedInOnly: true,
  mainMutation: deleteNoteCall,
}

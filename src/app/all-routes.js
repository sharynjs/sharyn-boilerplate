// @flow

import { loginRoute } from 'auth/auth-routes'
import LoginPage from 'auth/cmp-page/LoginPage'
import { fakeClientErrorRoute, notFoundRoute } from 'error/error-routes'
import FakeClientErrorPage from 'error/cmp-page/FakeClientErrorPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'
import {
  notesRoute,
  noteRoute,
  newNoteRoute,
  editNoteRoute,
  deleteNoteRoute,
} from 'note/note-routes'
import NotesPage from 'note/cmp-page/NotesPage'
import NotePage from 'note/cmp-page/NotePage'
import EditNotePage from 'note/cmp-page/EditNotePage'
import NewNotePage from 'note/cmp-page/NewNotePage'
import { landingSignupRoute } from 'landing/landing-routes'
import LandingSignupPage from 'landing/cmp-page/LandingSignupPage'

const allRoutesAndCmps: Object[] = [
  [loginRoute, LoginPage],
  [landingSignupRoute, LandingSignupPage],
  [notesRoute, NotesPage],
  [noteRoute, NotePage],
  [newNoteRoute, NewNotePage],
  [editNoteRoute, EditNotePage],
  [deleteNoteRoute],
  [fakeClientErrorRoute, FakeClientErrorPage],
  [notFoundRoute, NotFoundPage],
].map(pair => ({ route: pair[0], component: pair[1] }))

export default allRoutesAndCmps

// @flow

import React from 'react'
import { loginRoute } from 'auth/auth-routes'
import LoginPage from 'auth/cmp-page/LoginPage'
import { fakeClientErrorRoute, notFoundRoute } from 'error/error-routes'
import FakeClientErrorPage from 'error/cmp-page/FakeClientErrorPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'
import { notesRoute, noteRoute, newNoteRoute } from 'note/note-routes'
// import NotesPage from 'note/cmp-page/NotesPage'
// import NotePage from 'note/cmp-page/NotePage'
// import NewNotePage from 'note/cmp-page/NewNotePage'
import { welcomeRoute } from 'welcome/welcome-routes'
import WelcomePage from 'welcome/cmp-page/WelcomePage'

const allRoutesAndCmps: Object[] = [
  [loginRoute, LoginPage],
  [welcomeRoute, WelcomePage],
  // [notesRoute, NotesPage],
  // [noteRoute, NotePage],
  // [newNoteRoute, NewNotePage],
  [notesRoute, () => <div>Notes</div>],
  [noteRoute, () => <div>Note</div>],
  [newNoteRoute, () => <div>New Note</div>],
  [fakeClientErrorRoute, FakeClientErrorPage],
  [notFoundRoute, NotFoundPage],
].map(pair => ({ route: pair[0], component: pair[1] }))

export default allRoutesAndCmps
// @flow

import { loginRoute } from 'auth/auth-routes'
import { fakeClientErrorRoute, notFoundRoute } from 'error/error-routes'
import {
  notesRoute,
  noteRoute,
  newNoteRoute,
  editNoteRoute,
  deleteNoteRoute,
} from 'note/note-routes'

import { landingSignupRoute } from 'landing/landing-routes'

const allRoutes = [
  loginRoute,
  landingSignupRoute,
  notesRoute,
  noteRoute,
  newNoteRoute,
  editNoteRoute,
  deleteNoteRoute,
  fakeClientErrorRoute,
  notFoundRoute,
]

export default allRoutes

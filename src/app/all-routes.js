// @flow

import { loginRoute } from 'auth/auth-routes'
import { fakeClientErrorRoute, notFoundRoute, serverErrorRoute } from 'error/error-routes'
import {
  editNoteRoute,
  deleteNoteRoute,
  newNoteRoute,
  noteRoute,
  notesRoute,
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
  serverErrorRoute,
  notFoundRoute,
]

export default allRoutes

// @flow

import {
  FAKE_CLIENT_ERROR_PATH,
  SERVER_ERROR_PATH,
  FAKE_SERVER_ERROR_PATH,
  FAKE_NOT_FOUND_ERROR_PATH,
} from 'error/error-paths'
import FakeClientErrorPage from 'error/cmp-page/FakeClientErrorPage'
import ServerErrorPage from 'error/cmp-page/ServerErrorPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'
import ErrorIcon from '@material-ui/icons/ErrorOutline'

export const notFoundRoute = {
  title: 'Page Not Found',
  pageComponent: NotFoundPage,
  icon: ErrorIcon,
  backNav: '/',
}

export const serverErrorRoute = {
  path: SERVER_ERROR_PATH,
  exact: true,
  pageComponent: ServerErrorPage,
  title: 'Error',
  backNav: '/',
}

export const fakeClientErrorRoute = {
  path: FAKE_CLIENT_ERROR_PATH,
  exact: true,
  pageComponent: FakeClientErrorPage,
  title: 'Trigger Client Error',
  icon: ErrorIcon,
  backNav: '/',
}

export const fakeNotFoundErrorRoute = {
  path: FAKE_NOT_FOUND_ERROR_PATH,
  exact: true,
  icon: ErrorIcon,
  title: 'Trigger 404 Error',
}

export const fakeServerErrorRoute = {
  path: FAKE_SERVER_ERROR_PATH,
  exact: true,
  title: 'Trigger Server Error',
  icon: ErrorIcon,
}

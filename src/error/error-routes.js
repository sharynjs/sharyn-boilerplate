// @flow

import { FAKE_CLIENT_ERROR_PATH } from 'error/error-paths'
import FakeClientErrorPage from 'error/cmp-page/FakeClientErrorPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'

export const notFoundRoute: Object = {
  title: 'Page Not Found',
  pageComponent: NotFoundPage,
}

export const fakeClientErrorRoute: Object = {
  path: FAKE_CLIENT_ERROR_PATH,
  exact: true,
  pageComponent: FakeClientErrorPage,
  title: 'Fake Client Error',
}

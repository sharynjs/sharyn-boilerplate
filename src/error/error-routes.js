// @flow

import { FAKE_CLIENT_ERROR_PATH } from 'error/error-paths'

export const notFoundRoute: Object = {
  title: 'Page Not Found',
}

export const fakeClientErrorRoute: Object = {
  path: FAKE_CLIENT_ERROR_PATH,
  exact: true,
  title: 'Fake Client Error',
}

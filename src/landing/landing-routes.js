// @flow

import { LANDING_SIGNUP_PATH } from 'landing/landing-paths'

export const landingSignupRoute: Object = {
  path: LANDING_SIGNUP_PATH,
  exact: true,
  loggedOutOnly: true,
}

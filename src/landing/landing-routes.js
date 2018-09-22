// @flow

import { LANDING_SIGNUP_PATH } from 'landing/landing-paths'
import LandingSignupPage from 'landing/cmp-page/LandingSignupPage'

export const landingSignupRoute = {
  path: LANDING_SIGNUP_PATH,
  exact: true,
  loggedOutOnly: true,
  pageComponent: LandingSignupPage,
}

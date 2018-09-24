// @flow

import LogoutIcon from '@material-ui/icons/PowerSettingsNew'

import { LOGIN_PATH, LOGOUT_PATH } from 'auth/auth-paths'
import LoginPage from 'auth/cmp-page/LoginPage'

export const loginRoute = {
  path: LOGIN_PATH,
  exact: true,
  pageComponent: LoginPage,
  title: 'Log In',
}

export const logoutRoute = {
  path: LOGOUT_PATH,
  title: 'Log Out',
  icon: LogoutIcon,
}

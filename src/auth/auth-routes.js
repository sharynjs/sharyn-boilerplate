// @flow

import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import { LOGIN_PATH, LOGOUT_PATH } from 'auth/auth-paths'

export const loginRoute: Object = {
  path: LOGIN_PATH,
  exact: true,
  title: 'Log In',
}

export const logoutRoute: Object = {
  path: LOGOUT_PATH,
  title: 'Log Out',
  Icon: LogoutIcon,
}

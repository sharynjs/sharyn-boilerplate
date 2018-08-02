// @flow

import LogoutIcon from '@material-ui/icons/PowerSettingsNew'

export const signupRoute: Object = {
  path: '/signup',
}

export const loginRoute: Object = {
  path: '/login',
  exact: true,
  title: 'Log In',
}

export const logoutRoute: Object = {
  path: '/logout',
  title: 'Log Out',
  Icon: LogoutIcon,
}

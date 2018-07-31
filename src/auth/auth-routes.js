// @flow

import LogoutIcon from '@material-ui/icons/PowerSettingsNew'

export const loginRoute: Object = {
  path: '/login',
  exact: true,
  title: 'Log In',
}

export const logoutRoute: Object = {
  path: '/logout',
  hardLink: true,
  title: 'Log Out',
  Icon: LogoutIcon,
  inNav: true,
}
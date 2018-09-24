// @flow

import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Progress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import UserIcon from '@material-ui/icons/AccountCircle'
import BackIcon from '@material-ui/icons/ArrowBack'
import OfflineIcon from '@material-ui/icons/CloudOff'
import MenuIcon from '@material-ui/icons/Menu'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import RefreshIcon from '@material-ui/icons/Refresh'
import StyleIcon from '@material-ui/icons/Style'
import { connect as withRedux } from 'react-redux'
import Link from 'react-router-dom/Link'
import compose from 'recompose/compose'
import withStateHandlers from 'recompose/withStateHandlers'
import NavList from 'sharyn/components/NavList'
import hideOnScroll from 'sharyn/hocs/hide-on-scroll'

import { LOGOUT_PATH } from 'auth/auth-paths'
import {
  fakeClientErrorRoute,
  fakeNotFoundErrorRoute,
  fakeServerErrorRoute,
} from 'error/error-routes'
import { notesRoute, newNoteRoute } from 'note/note-routes'

const AppWithAutoScroll = hideOnScroll(AppBar)

const navItems = [
  notesRoute,
  newNoteRoute,
  fakeNotFoundErrorRoute,
  [fakeServerErrorRoute, { hardLink: true }],
  fakeClientErrorRoute,
  { title: 'Storybook', path: '/static/storybook/', icon: StyleIcon, newTab: true },
]

const NavJSX = ({
  classes: css,
  title,
  username,
  backNav,
  isOffline = false,
  isDrawerOpen,
  openDrawer,
  closeDrawer,
  isUserMenuOpen,
  openUserMenu,
  closeUserMenu,
  userMenuAnchorEl,
  isRefreshing,
  refresh,
}: {
  classes: Object,
  title?: string,
  username?: string,
  backNav?: string,
  isOffline?: boolean,
  isDrawerOpen: boolean,
  openDrawer: Function,
  closeDrawer: Function,
  isUserMenuOpen: boolean,
  openUserMenu: Function,
  closeUserMenu: Function,
  userMenuAnchorEl?: Object,
  isRefreshing?: boolean,
  refresh: Function,
}) => (
  <>
    <AppWithAutoScroll className="hide-on-scroll">
      <Toolbar>
        <IconButton color="inherit" onClick={openDrawer}>
          <MenuIcon />
        </IconButton>
        {backNav && (
          <IconButton
            className={css.backButton}
            color="inherit"
            aria-label="Back"
            component={Link}
            to={backNav}
          >
            <BackIcon />
          </IconButton>
        )}
        <Typography variant="title" color="inherit" className={css.title}>
          {title}
        </Typography>
        {isOffline && <OfflineIcon color="inherit" />}
        {isRefreshing ? (
          <Progress className={css.refreshProgress} color="inherit" size={20} thickness={6} />
        ) : (
          <IconButton color="inherit" onClick={refresh} className={css.onlyInStandalone}>
            <RefreshIcon className={css.refreshIcon} />
          </IconButton>
        )}
        <IconButton
          color="inherit"
          onClick={openUserMenu}
          className={css.hideOnMobile}
          data-test="user-menu"
        >
          <UserIcon />
        </IconButton>
        <Menu open={isUserMenuOpen} onClose={closeUserMenu} anchorEl={userMenuAnchorEl}>
          <li className={css.userMenuUserItem} data-test="username-display">
            {username}
          </li>
          <MenuItem component="a" href={LOGOUT_PATH} onClick={closeUserMenu}>
            <LogoutIcon className={css.userMenuItemIcon} /> Log Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppWithAutoScroll>
    <div className={css.appBarPusher} />
    <SwipeableDrawer
      anchor="left"
      open={isDrawerOpen}
      disableBackdropTransition
      onOpen={openDrawer}
      onClose={closeDrawer}
      onClick={closeDrawer}
    >
      <NavList {...{ navItems }} />
    </SwipeableDrawer>
  </>
)

export const NavCmp = compose(
  withStateHandlers(
    { isDrawerOpen: false, isUserMenuOpen: false, userMenuAnchorEl: null, isRefreshing: false },
    {
      openDrawer: () => () => ({ isDrawerOpen: true }),
      closeDrawer: () => () => ({ isDrawerOpen: false }),
      openUserMenu: () => e => ({ isUserMenuOpen: true, userMenuAnchorEl: e.target }),
      closeUserMenu: () => () => ({ isUserMenuOpen: false }),
      refresh: () => () => window.location.reload(true) || { isRefreshing: true },
    },
  ),
  withStyles(({ spacing, mixins, breakpoints }) => ({
    appBarPusher: mixins.toolbar,
    backButton: { margin: '0 6px 0 -6px' },
    title: { flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    userMenuUserItem: {
      extend: 'hideOnMobile',
      textAlign: 'center',
      fontWeight: 'bold',
      paddingTop: spacing.unit,
      paddingBottom: spacing.unit * 2,
      '&:focus': { outline: 0 },
    },
    userMenuItemIcon: { marginRight: spacing.unit },
    notInStandalone: {
      '@media all and (display-mode: standalone)': { display: 'none' },
    },
    onlyInStandalone: {
      display: 'none',
      '@media all and (display-mode: standalone)': { display: 'block' },
    },
    hideOnMobile: { [breakpoints.down('xs')]: { display: 'none' } },
    hideOnDesktop: { [breakpoints.up('sm')]: { display: 'none' } },
    refreshIcon: { fontSize: 30 },
    refreshProgress: { margin: '0 17px' },
  })),
)(NavJSX)

const Nav = withRedux(({ user, env }) => ({ username: user?.username, isOffline: !env.isOnline }))(
  NavCmp,
)

export default Nav

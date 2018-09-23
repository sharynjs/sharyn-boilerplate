// @flow

import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import withStateHandlers from 'recompose/withStateHandlers'
import withHandlers from 'recompose/withHandlers'
import { connect as withRedux } from 'react-redux'

import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import StyleIcon from '@material-ui/icons/Style'
import hideOnScroll from 'sharyn/hocs/hide-on-scroll'
import NavList from 'sharyn/components/NavList'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { notesRoute, newNoteRoute } from 'note/note-routes'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import { LOGOUT_PATH } from 'auth/auth-paths'
import {
  fakeClientErrorRoute,
  fakeServerErrorRoute,
  fakeNotFoundErrorRoute,
} from 'error/error-routes'
import BackIcon from '@material-ui/icons/ArrowBack'
import OfflineIcon from '@material-ui/icons/CloudOff'
import UserIcon from '@material-ui/icons/AccountCircle'
import RefreshIcon from '@material-ui/icons/Refresh'
import MoreIcon from '@material-ui/icons/MoreVert'

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
  hardRefresh,
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
  hardRefresh: Function,
}) => (
  <Fragment>
    <AppWithAutoScroll className="hide-on-scroll">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={openDrawer}>
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
        {title && (
          <Typography variant="title" color="inherit" className={css.grow}>
            {title}
          </Typography>
        )}
        {isOffline && <OfflineIcon color="inherit" />}
        <IconButton color="inherit" onClick={openUserMenu}>
          <MoreIcon className={css.hideOnDesktop} />
          <UserIcon className={css.hideOnMobile} />
        </IconButton>
        <Menu open={isUserMenuOpen} onClose={closeUserMenu} anchorEl={userMenuAnchorEl}>
          <li className={css.userMenuUserItem} data-test="username-display">
            {username}
          </li>
          <MenuItem className={css.onlyInStandalone} onClick={hardRefresh}>
            <RefreshIcon className={css.userMenuItemIcon} /> Refresh
          </MenuItem>
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
      <NavList navItems={navItems} />
    </SwipeableDrawer>
  </Fragment>
)

export const NavCmp = compose(
  withStateHandlers(
    { isDrawerOpen: false, isUserMenuOpen: false, userMenuAnchorEl: null },
    {
      openDrawer: () => () => ({ isDrawerOpen: true }),
      closeDrawer: () => () => ({ isDrawerOpen: false }),
      openUserMenu: () => e => ({ isUserMenuOpen: true, userMenuAnchorEl: e.target }),
      closeUserMenu: () => () => ({ isUserMenuOpen: false }),
    },
  ),
  withHandlers({ hardRefresh: () => () => window.location.reload(true) }),
  withStyles(({ spacing, mixins, breakpoints }) => ({
    appBarPusher: mixins.toolbar,
    backButton: { margin: '0 6px 0 -6px' },
    grow: { flexGrow: 1 },
    userMenuUserItem: {
      textAlign: 'center',
      fontWeight: 'bold',
      paddingTop: spacing.unit,
      paddingBottom: spacing.unit * 2,
      '&:focus': { outline: 0 },
    },
    userMenuItemIcon: { marginRight: spacing.unit },
    onlyInStandalone: {
      display: 'none',
      '@media all and (display-mode: standalone)': { display: 'block' },
    },
    hideOnMobile: { [breakpoints.down('xs')]: { display: 'none' } },
    hideOnDesktop: { [breakpoints.up('sm')]: { display: 'none' } },
  })),
)(NavJSX)

const Nav = withRedux(({ user, env }) => ({ username: user?.username, isOffline: !env.isOnline }))(
  NavCmp,
)

export default Nav

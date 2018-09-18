// @flow

import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import hideOnScroll from 'sharyn/hocs/hide-on-scroll'
import NavList from 'sharyn/components/NavList'
import { notesRoute, newNoteRoute } from 'note/note-routes'
import { logoutRoute } from 'auth/auth-routes'
import BackIcon from '@material-ui/icons/ArrowBack'

const AppWithAutoScroll = hideOnScroll(AppBar)

const navItems = [notesRoute, newNoteRoute, [logoutRoute, { hardLink: true }]]

const mstp = ({ user }) => ({ username: user?.username })

const styles = ({ mixins }) => ({
  appBarPusher: mixins.toolbar,
  backButton: { margin: '0 6px 0 -6px' },
})

const NavJSX = ({
  classes: css,
  title,
  isOpen,
  updateIsOpen,
  username,
  backNav,
}: {
  classes: Object,
  isOpen: boolean,
  title: string,
  updateIsOpen: Function,
  username: string,
  backNav?: string,
}) => (
  <Fragment>
    <AppWithAutoScroll className="hide-on-scroll">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={() => updateIsOpen(!isOpen)}>
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
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppWithAutoScroll>
    <div className={css.appBarPusher} />
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      disableBackdropTransition
      onOpen={() => updateIsOpen(true)}
      onClose={() => updateIsOpen(false)}
      onClick={() => updateIsOpen(false)}
    >
      <NavList navItems={navItems} />
      <div data-test="username-display">{username}</div>
    </SwipeableDrawer>
  </Fragment>
)

const Nav = compose(
  withState('isOpen', 'updateIsOpen', false),
  connect(mstp),
  withStyles(styles),
)(NavJSX)

export default Nav

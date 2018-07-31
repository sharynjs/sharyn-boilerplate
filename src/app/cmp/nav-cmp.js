// @flow

import React, { Fragment } from 'react'
import { withState, compose } from 'recompose'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import DrawerItem from '@sharyn/components/DrawerItem'
import MenuIcon from '@material-ui/icons/Menu'
import hideOnScroll from '@sharyn/hocs/hide-on-scroll'

const AppWithAutoScroll = hideOnScroll(AppBar)

const mstp = ({ general }) => ({ username: general?.user?.username })

const styles = ({ mixins }) => ({ appBarPusher: mixins.toolbar })

const NavJSX = ({
  classes,
  title,
  navRoutes,
  isOpen,
  updateIsOpen,
  username,
}: {
  classes: Object,
  isOpen: boolean,
  title: string,
  navRoutes: Object[],
  updateIsOpen: Function,
  username?: string,
}) => (
  <Fragment>
    <AppWithAutoScroll style={{ cursor: 'pointer' }} className="hide-on-scroll">
      <Toolbar onClick={() => updateIsOpen(!isOpen)}>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          {title} - <span data-test="username-display">{username}</span>
        </Typography>
      </Toolbar>
    </AppWithAutoScroll>
    <div className={classes.appBarPusher} />
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      disableBackdropTransition
      onOpen={() => updateIsOpen(true)}
      onClose={() => updateIsOpen(false)}
      onClick={() => updateIsOpen(false)}
    >
      <List>
        {navRoutes.map(({ path, title: label, Icon }) => (
          <Link to={path} key={path}>
            <DrawerItem label={label} icon={Icon} />
          </Link>
        ))}
      </List>
    </SwipeableDrawer>
  </Fragment>
)

const Nav = compose(
  withState('isOpen', 'updateIsOpen', false),
  connect(mstp),
  withStyles(styles),
)(NavJSX)

export default Nav

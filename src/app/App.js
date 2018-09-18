// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import compose from 'recompose/compose'
import withLifecycle from 'recompose/lifecycle'
import { getPageInfo, findMatch } from 'sharyn/shared'
import { withStyles } from '@material-ui/core/styles'
import { navigation, dismissFirstNotification } from 'sharyn/client/actions'
import Notifications from 'sharyn/components/Notifications'
import globalStyles from 'sharyn/css/global'
import allRoutesAndCmps from 'app/all-routes'
import Nav from 'app/cmp/Nav'
import Favicons from 'app/cmp/Favicons'

const lifecycle = {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.handleNavigation()
    }
  },
}

const mstp = ({ data, user, env, ui }) => ({
  mainState: { data, user, env },
  isLoggedIn: !!user,
  isPageLoading: ui.isPageLoading,
  notifications: ui.notifications,
})

const mdtp = dispatch => ({
  handleDismissNotification: () => dispatch(dismissFirstNotification()),
  handleNavigation: () => dispatch(navigation()),
})

type Props = {
  isLoggedIn: boolean,
  location: Object,
  history: Object,
  mainState: Object,
  isPageLoading?: boolean,
  notifications?: Object[],
  handleDismissNotification: Function,
  errors?: string,
}

const AppJSX = ({
  isLoggedIn,
  isPageLoading,
  location,
  mainState,
  history: routerHistory,
  notifications = [],
  handleDismissNotification,
}: Props) => {
  const { match, route, Component } = findMatch(allRoutesAndCmps, location.pathname, isLoggedIn)
  const { title, backNav } = getPageInfo(route, mainState)
  return (
    <Fragment>
      <Helmet titleTemplate="%s | Notesapp" defaultTitle="Notesapp – Great Notes for Great People">
        <html lang="en" />
        <title>{isPageLoading && !title ? 'Loading...' : title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {Favicons}
      </Helmet>
      {isLoggedIn && <Nav {...{ title, backNav }} />}
      <Component {...{ route, match, routerHistory }} />
      <Notifications {...{ notifications, handleDismissNotification }} />
    </Fragment>
  )
}

const App = compose(
  hot(module),
  withRouter,
  connect(
    mstp,
    mdtp,
  ),
  withLifecycle(lifecycle),
  withStyles(globalStyles),
)(AppJSX)

export default App

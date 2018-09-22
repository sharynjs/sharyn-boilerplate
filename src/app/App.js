// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import { connect as withRedux } from 'react-redux'
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

type Props = {
  location: Object,
  history: Object,
  mainState: Object,
  isLoggedIn: boolean,
  isPageLoading?: boolean,
  notifications?: Object[],
  handleDismissNotification: Function,
}

const AppJSX = ({
  location,
  history: routerHistory,
  mainState,
  isLoggedIn,
  isPageLoading,
  notifications,
  handleDismissNotification,
}: Props) => {
  const { match, route, Component } = findMatch(allRoutesAndCmps, location.pathname, isLoggedIn)
  const { title, backNav } = getPageInfo(route, mainState)
  const titleRequiresData = route.title instanceof Function
  return (
    <Fragment>
      <Helmet titleTemplate="%s | Notesapp" defaultTitle="Notesapp – Great Notes for Great People">
        <html lang="en" />
        <title>{isPageLoading && titleRequiresData ? 'Loading...' : title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {Favicons}
      </Helmet>
      {isLoggedIn && (
        <Nav {...{ backNav }} title={isPageLoading && titleRequiresData ? '' : title} />
      )}
      <Component {...{ route, match, routerHistory }} />
      <Notifications {...{ notifications, handleDismissNotification }} />
    </Fragment>
  )
}

const App = compose(
  hot(module),
  withRouter,
  withRedux(
    ({ data, user, env, async, ui }) => ({
      mainState: { data, user, env },
      isLoggedIn: !!user,
      isPageLoading: async.page,
      notifications: ui.notifications,
    }),
    dispatch => ({
      handleDismissNotification: () => dispatch(dismissFirstNotification()),
      handleNavigation: () => dispatch(navigation()),
    }),
  ),
  withLifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.location.pathname !== this.props.location.pathname) {
        this.props.handleNavigation()
      }
    },
  }),
  withStyles(globalStyles),
)(AppJSX)

export default App

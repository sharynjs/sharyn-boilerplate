// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Helmet from 'react-helmet'
import { connect as withRedux } from 'react-redux'
import withRouter from 'react-router-dom/withRouter'
import compose from 'recompose/compose'
import withLifecycle from 'recompose/lifecycle'
import favicons from 'sharyn/components/favicons'
import Notifications from 'sharyn/components/Notifications'
import globalStyles from 'sharyn/css/global'
import { navigation, dismissFirstNotification } from 'sharyn/redux/actions'
import findMatch from 'sharyn/shared/find-match'
import getPageInfo from 'sharyn/shared/get-page-info'

import Nav from 'app/cmp/Nav'
import allRoutes from 'app/all-routes'
import { primaryColor } from 'app/theme'

const AppJSX = ({
  location,
  history: routerHistory,
  mainState,
  isLoggedIn,
  isPageLoading,
  notifications,
  handleDismissNotification,
}: {
  location: Object,
  history: Object,
  mainState: Object,
  isLoggedIn: boolean,
  isPageLoading?: boolean,
  notifications?: Object[],
  handleDismissNotification: Function,
}) => {
  const { match, route: activeRoute } = findMatch(allRoutes, location.pathname, isLoggedIn)
  const { title, backNav } = getPageInfo(activeRoute, mainState)
  const titleRequiresData = activeRoute.title instanceof Function
  const { pageComponent: PageComponent, ...route } = activeRoute
  return (
    <>
      <Helmet titleTemplate="%s | Notesapp" defaultTitle="Notesapp – Great Notes for Great People">
        <html lang="en" />
        <title>{isPageLoading && titleRequiresData ? 'Loading...' : title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link key="manifest" rel="manifest" href="/static/site.webmanifest" />
        {favicons(primaryColor)}
      </Helmet>
      {isLoggedIn && (
        <Nav {...{ backNav }} title={isPageLoading && titleRequiresData ? '' : title} />
      )}
      <PageComponent {...{ route, match, routerHistory }} />
      <Notifications {...{ notifications, handleDismissNotification }} />
    </>
  )
}

const App = compose(
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
    componentWillMount() {
      this.props.history.listen(() => this.props.handleNavigation())
    },
  }),
  withStyles(globalStyles),
)(AppJSX)

export default App

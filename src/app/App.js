// @flow

import React from 'react'

import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import { connect as withRedux } from 'react-redux'
import compose from 'recompose/compose'
import favicons from 'sharyn/components/favicons'
import Notifications from 'sharyn/components/Notifications'
import withNavigation from 'sharyn/hocs/with-navigation'
import { navigation, dismissFirstNotification } from 'sharyn/redux/actions'
import findMatch from 'sharyn/shared/find-match'
import getPageInfo from 'sharyn/shared/get-page-info'

import Nav from 'app/cmp/Nav'
import allRoutes from 'app/all-routes'
import { primaryColor } from 'app/theme'

const AppJSX = ({
  location,
  history: routerHistory,
  pageState,
  isLoggedIn,
  isPageLoading,
  notifications,
  handleDismissNotification,
}: {
  location: Object,
  history: Object,
  pageState: Object,
  isLoggedIn: boolean,
  isPageLoading?: boolean,
  notifications?: Object[],
  handleDismissNotification: Function,
}) => {
  const { match, route: activeRoute } = findMatch(allRoutes, location.pathname, isLoggedIn)
  const { title, backNav } = getPageInfo(activeRoute, pageState)
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
  hot(module),
  withRedux(
    ({ pageData, user, env, asyncMap, ui }) => ({
      pageState: { pageData, user, env },
      isLoggedIn: !!user,
      isPageLoading: asyncMap.page,
      notifications: ui.notifications,
    }),
    { handleDismissNotification: dismissFirstNotification },
  ),
  withNavigation(navigation),
)(AppJSX)

export default App

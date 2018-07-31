// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { fillTitle, findMatch } from '@sharyn/shared'
import { withStyles } from '@material-ui/core/styles'

import globalStyles from '_shared/global-styles'
import Nav from 'app/cmp/nav-cmp'
import { loginRoute } from 'auth/auth-routes'
import LoginPage from 'auth/cmp-page/login-page'
import { fakeClientErrorRoute, notFoundRoute } from 'error/error-routes'
import FakeClientErrorPage from 'error/cmp-page/fake-client-error-page'
import NotFoundPage from 'error/cmp-page/not-found-page'
import { welcomeRoute } from 'welcome/welcome-routes'
import WelcomePage from 'welcome/cmp-page/welcome-page'

const allRoutesAndCmps: Object[] = [
  [loginRoute, LoginPage],
  [welcomeRoute, WelcomePage],
  [fakeClientErrorRoute, FakeClientErrorPage],
  [notFoundRoute, NotFoundPage],
].map(pair => ({ route: pair[0], component: pair[1] }))

const mstp = ({ page, general }) => ({ isLoggedIn: !!general.user, pageData: page })

type Props = { location: Object, isLoggedIn: boolean, pageData?: Object }

const AppJSX = ({ location, isLoggedIn, pageData }: Props) => {
  const { match, route, Component, routes } = findMatch(
    allRoutesAndCmps,
    location.pathname,
    isLoggedIn,
  )
  const title = fillTitle(route.title, pageData)
  return (
    <Fragment>
      <Helmet titleTemplate="%s | Notesapp" defaultTitle="Notesapp – Great Notes for Great People">
        <html lang="en" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Helmet>
      {isLoggedIn && <Nav title={title} navRoutes={routes.filter(r => r.inNav)} />}
      <Component route={route} match={match} />
    </Fragment>
  )
}

const App = compose(
  hot(module),
  withRouter,
  connect(mstp),
  withStyles(globalStyles),
)(AppJSX)

export default App

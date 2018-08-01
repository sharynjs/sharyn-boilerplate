// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { fillTitle, findMatch } from '@sharyn/shared'
import { withStyles } from '@material-ui/core/styles'

import Nav from 'app/cmp/Nav'
import Favicons from 'app/cmp/Favicons'
import globalStyles from 'app/global-styles'
import { loginRoute } from 'auth/auth-routes'
import LoginPage from 'auth/cmp-page/LoginPage'
import { fakeClientErrorRoute, notFoundRoute } from 'error/error-routes'
import FakeClientErrorPage from 'error/cmp-page/FakeClientErrorPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'
import { notesRoute, noteRoute, newNoteRoute } from 'note/note-routes'
// import NotesPage from 'note/cmp-page/NotesPage'
// import NotePage from 'note/cmp-page/NotePage'
// import NewNotePage from 'note/cmp-page/NewNotePage'
import { welcomeRoute } from 'welcome/welcome-routes'
import WelcomePage from 'welcome/cmp-page/WelcomePage'

const allRoutesAndCmps: Object[] = [
  [loginRoute, LoginPage],
  [welcomeRoute, WelcomePage],
  // [notesRoute, NotesPage],
  // [noteRoute, NotePage],
  // [newNoteRoute, NewNotePage],
  [notesRoute, () => <div>Notes</div>],
  [noteRoute, () => <div>Note</div>],
  [newNoteRoute, () => <div>New Note</div>],
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
        {Favicons}
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

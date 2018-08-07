// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, lifecycle as withLifecycle } from 'recompose'
import { fillTitle, findMatch } from 'sharyn/shared'
import { withStyles } from '@material-ui/core/styles'

import { clearData } from '_client/main-duck'
import allRoutesAndCmps from 'app/all-routes'
import Nav from 'app/cmp/Nav'
import Favicons from 'app/cmp/Favicons'
import globalStyles from 'app/global-styles'

const lifecycle = {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.dispatch(clearData())
    }
  },
}

const mstp = ({ data, user }) => ({ data, isLoggedIn: !!user })

type Props = { location: Object, isLoggedIn: boolean, data?: Object }

const AppJSX = ({ location, isLoggedIn, data }: Props) => {
  const { match, route, Component } = findMatch(allRoutesAndCmps, location.pathname, isLoggedIn)
  const title = fillTitle(route.title, data)
  return (
    <Fragment>
      <Helmet titleTemplate="%s | Notesapp" defaultTitle="Notesapp – Great Notes for Great People">
        <html lang="en" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {Favicons}
      </Helmet>
      {isLoggedIn && <Nav title={title} />}
      <Component route={route} match={match} />
    </Fragment>
  )
}

const App = compose(
  hot(module),
  withRouter,
  connect(mstp),
  withLifecycle(lifecycle),
  withStyles(globalStyles),
)(AppJSX)

export default App

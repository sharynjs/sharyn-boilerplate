// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

import { muiTheme } from 'storybook-addon-material-ui'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { host } from 'storybook-host'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'
import JssProvider from 'react-jss/lib/JssProvider'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
import withStyles from '@material-ui/core/styles/withStyles'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import globalStyles from 'sharyn/css/global'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import dataReducer from '_client/reducers/data-reducer'
import Note from 'note/cmp/Note'
import NoteForm from 'note/cmp/NoteForm'
import theme from 'app/theme'

jss.setup(jssPreset())
const GlobalStylesProvider = withStyles(globalStyles)(({ children }) => <>{children}</>)

const store = createStore(
  combineReducers({
    data: dataReducer,
    user: (s = null) => s,
    ui: (s = {}) => s,
    async: (s = {}) => s,
    env: (s = {}) => s,
  }),
  applyMiddleware(thunk),
)

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([
      { name: 'White', value: '#fff', default: true },
      { name: 'Gray', value: '#f2f2f2' },
    ]),
  )
  .addDecorator(getStory => (
    <Provider {...{ store }}>
      <BrowserRouter>
        <JssProvider {...{ jss }} generateClassName={createGenerateClassName()}>
          <GlobalStylesProvider>{getStory()}</GlobalStylesProvider>
        </JssProvider>
      </BrowserRouter>
    </Provider>
  ))
  .addDecorator(muiTheme(theme))
  .addDecorator(host({ align: 'center middle', backdrop: 'transparent' }))
  .add('Note', () => (
    <div style={{ width: 600 }}>
      <Note
        id="1234"
        title={text('title', 'A Title')}
        description={text('description', 'A description')}
        useTitleLink={boolean('useTitleLink', true)}
      />
    </div>
  ))
  .add('NoteForm', () => (
    <div style={{ width: 600 }}>
      <NoteForm isEdit={boolean('isEdit', false)} />
    </div>
  ))

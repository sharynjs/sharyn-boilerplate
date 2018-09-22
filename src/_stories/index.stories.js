// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

import { muiTheme } from 'storybook-addon-material-ui'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
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
import Host from 'sharyn/components/StoryHost'
import spread from 'sharyn/util/spread'

import dataReducer from '_client/reducers/data-reducer'
import { NoteCmp } from 'note/cmp/Note'
import { NoteFormCmp } from 'note/cmp/NoteForm'
import { NavCmp } from 'app/cmp/Nav'
import { SignupFormCmp } from 'auth/cmp/SignupForm'
import { LoginFormCmp } from 'auth/cmp/LoginForm'
import { LoginPageCmp } from 'auth/cmp-page/LoginPage'
import { LogoTitleCmp } from 'app/cmp/LogoTitle'
import { FakeClientErrorPageCmp } from 'error/cmp-page/FakeClientErrorPage'
import { NotFoundPageCmp } from 'error/cmp-page/NotFoundPage'
import { LandingSignupPageCmp } from 'landing/cmp-page/LandingSignupPage'
import { EditNotePageCmp } from 'note/cmp-page/EditNotePage'
import { NewNotePageCmp } from 'note/cmp-page/NewNotePage'
import { NotePageCmp } from 'note/cmp-page/NotePage'
import { NotesPageCmp } from 'note/cmp-page/NotesPage'
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

storiesOf('All Components', module)
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
  .add('LandingSignupPageCmp', () => <LandingSignupPageCmp />)
  .add('LoginPageCmp', () => <LoginPageCmp />)
  .add('LogoTitleCmp', () => (
    <Host border>
      <LogoTitleCmp />
    </Host>
  ))
  .add('SignupFormCmp', () => (
    <Host border>
      <SignupFormCmp
        previousFields={{ username: 'previous-username' }}
        errorMessage={text('errorMessage')}
      />
    </Host>
  ))
  .add('LoginFormCmp', () => (
    <Host border>
      <LoginFormCmp
        previousFields={{ username: 'previous-username' }}
        errorMessage={text('errorMessage')}
      />
    </Host>
  ))
  .add('NavCmp', () => (
    <NavCmp
      title={text('title', 'Hello World')}
      {...spread({ backNav: boolean('backNav', true) ? '#' : undefined })}
      username={text('username', 'sharyn8020')}
    />
  ))
  .add('NotesPageCmp', () => (
    <NotesPageCmp
      notes={
        boolean('No notes', false)
          ? undefined
          : [
              {
                id: '1',
                title: text('title1', 'A title'),
                description: text('description1', 'A description'),
              },
              {
                id: '2',
                title: text('title2', 'A title'),
                description: text('description2', 'A description'),
              },
            ]
      }
      isPageLoading={boolean('isPageLoading', false)}
    />
  ))
  .add('NotePageCmp', () => (
    <NotePageCmp
      note={
        boolean('Not found', false)
          ? undefined
          : {
              title: text('title', 'A title'),
              description: text('description', 'A description'),
            }
      }
      isPageLoading={boolean('isPageLoading', false)}
    />
  ))
  .add('NoteCmp', () => (
    <Host border>
      <NoteCmp
        id="1234"
        title={text('title', 'A Title')}
        description={text('description', 'A description')}
        useTitleLink={boolean('useTitleLink', true)}
        showActions={boolean('showActions', false)}
        isDeleting={boolean('isDeleting', false)}
      />
    </Host>
  ))
  .add('EditNotePageCmp', () => (
    <EditNotePageCmp
      noteToEdit={
        boolean('Not found', false)
          ? undefined
          : {
              title: 'edit-title',
              description: 'edit-description',
            }
      }
      isPageLoading={boolean('isPageLoading', false)}
    />
  ))
  .add('NewNotePageCmp', () => <NewNotePageCmp />)
  .add('NoteFormCmp Edit', () => (
    <Host border width={600}>
      <NoteFormCmp
        noteToEdit={{
          title: 'edit-title',
          description: 'edit-description',
        }}
        previousFields={{
          description: 'previous-description',
        }}
        isLoading={boolean('isLoading')}
      />
    </Host>
  ))
  .add('NoteFormCmp Create', () => (
    <Host border width={600}>
      <NoteFormCmp
        previousFields={{
          description: 'previous-description',
        }}
        isLoading={boolean('isLoading')}
      />
    </Host>
  ))
  .add('NotFoundPageCmp', () => <NotFoundPageCmp />)
  .add('FakeClientErrorPageCmp', () => <FakeClientErrorPageCmp />)

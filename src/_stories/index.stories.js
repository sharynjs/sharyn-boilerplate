// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
import withStyles from '@material-ui/core/styles/withStyles'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'
import JssProvider from 'react-jss/lib/JssProvider'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Provider } from 'react-redux'
import Host from 'sharyn/components/StoryHost'
import globalStyles from 'sharyn/css/global'
import createSharynStore from 'sharyn/redux/store'
import spread from 'sharyn/util/spread'
import { muiTheme } from 'storybook-addon-material-ui'

import LogoTitle from 'app/cmp/LogoTitle'
import { NavCmp } from 'app/cmp/Nav'
import theme from 'app/theme'
import { LoginFormCmp } from 'auth/cmp/LoginForm'
import { SignupFormCmp } from 'auth/cmp/SignupForm'
import LoginPage from 'auth/cmp-page/LoginPage'
import FakeClientErrorPage from 'error/cmp-page/FakeClientErrorPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'
import ServerErrorPage from 'error/cmp-page/ServerErrorPage'
import LandingSignupPage from 'landing/cmp-page/LandingSignupPage'
import { NoteCmp } from 'note/cmp/Note'
import { NoteFormCmp } from 'note/cmp/NoteForm'
import { EditNotePageCmp } from 'note/cmp-page/EditNotePage'
import NewNotePage from 'note/cmp-page/NewNotePage'
import { NotePageCmp } from 'note/cmp-page/NotePage'
import { NotesPageCmp } from 'note/cmp-page/NotesPage'

jss.setup(jssPreset())
const GlobalStylesProvider = withStyles(globalStyles)(({ children }) => <>{children}</>)

const store = createSharynStore()

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
  .add('LandingSignupPage', () => <LandingSignupPage />)
  .add('LoginPage', () => <LoginPage />)
  .add('LogoTitle', () => (
    <Host border>
      <LogoTitle />
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
      isOffline={boolean('isOffline', false)}
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
        isOnline={boolean('isOnline', true)}
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
  .add('NewNotePage', () => <NewNotePage />)
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
        isOnline={boolean('isOnline', true)}
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
        isOnline={boolean('isOnline', true)}
      />
    </Host>
  ))
  .add('NotFoundPage', () => <NotFoundPage />)
  .add('ServerErrorPage', () => <ServerErrorPage />)
  .add('FakeClientErrorPage', () => <FakeClientErrorPage />)

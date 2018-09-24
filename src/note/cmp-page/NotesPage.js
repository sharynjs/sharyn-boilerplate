// @flow

import React from 'react'

import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import AddIcon from '@material-ui/icons/Add'
import { connect as withRedux } from 'react-redux'
import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import LoadingPage from 'sharyn/components/LoadingPage'
import Page from 'sharyn/components/Page'
import renderIf from 'sharyn/hocs/render-if'
import withClientMainQuery from 'sharyn/hocs/with-client-main-query'

import Note from 'note/cmp/Note'
import { newNoteRoute } from 'note/note-routes'

const NotesPageJSX = ({ classes: css, notes }: { classes: Object, notes: Object[] }) => (
  <>
    <Page noPaper noPadding maxWidth={600}>
      {notes.map(n => (
        <div key={n.id} className={css.note}>
          <Note {...n} useTitleLink />
        </div>
      ))}
    </Page>
    <Button
      variant="fab"
      color="primary"
      className={css.fab}
      component={Link}
      to={newNoteRoute.path}
    >
      <AddIcon />
    </Button>
  </>
)

const NoNotesPageJSX = ({ classes: css }: { classes: Object }) => (
  <>
    <Page noPaper noPadding middle>
      {"You don't have any note yet!"}
    </Page>
    <Button
      variant="extendedFab"
      color="primary"
      className={css.extendedFab}
      component={Link}
      to={newNoteRoute.path}
    >
      <AddIcon className={css.extendedFabIcon} />
      Add note
    </Button>
  </>
)

export const NotesPageCmp = compose(
  renderIf(({ isPageLoading }) => isPageLoading, LoadingPage),
  withStyles(({ spacing }) => ({
    note: { marginBottom: 30 },
    fab: { position: 'fixed', bottom: spacing.unit * 3, right: spacing.unit * 3 },
    extendedFab: { extend: 'fab', paddingRight: spacing.unit * 3 },
    extendedFabIcon: { marginRight: spacing.unit },
  })),
  renderIf(({ notes }) => !notes || notes?.length === 0, NoNotesPageJSX),
)(NotesPageJSX)

const NotesPage = compose(
  withRedux(({ data, async }) => ({ notes: data.notes, isPageLoading: async.page })),
  withClientMainQuery(),
)(NotesPageCmp)

export default NotesPage

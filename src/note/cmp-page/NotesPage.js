// @flow

import React from 'react'
import { connect as withRedux } from 'react-redux'
import compose from 'recompose/compose'
import { newNoteRoute } from 'note/note-routes'
import { Link } from 'react-router-dom'
import withClientMainQuery from 'sharyn/hocs/with-client-main-query'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Page from 'sharyn/components/Page'
import Note from 'note/cmp/Note'
import renderIf from 'sharyn/hocs/render-if'
import LoadingPage from 'sharyn/components/LoadingPage'

type Props = { classes: Object, notes: Object[] }

const NotesPageJSX = ({ classes: css, notes }: Props) => (
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

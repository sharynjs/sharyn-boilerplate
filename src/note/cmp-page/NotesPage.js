// @flow

import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { newNoteRoute } from 'note/note-routes'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Page from 'sharyn/components/Page'
import spreadIf from 'sharyn/util/spread-if'
import Note from 'note/cmp/Note'

const styles = ({ spacing }) => ({
  fab: { position: 'absolute', bottom: spacing.unit * 3, right: spacing.unit * 3 },
  extendedFab: { extend: 'fab', paddingRight: spacing.unit * 3 },
  extendedFabIcon: { marginRight: spacing.unit },
})

const mstp = ({ data }) => ({ notes: data.notes })

type Props = { classes: Object, notes: Object[] }

const NotesPageJSX = ({ classes: css, notes = [] }: Props) => {
  const hasNotes = notes.length > 0
  return (
    <>
      {hasNotes ? (
        <Page noPaper noPadding maxWidth={600}>
          {notes.map(n => (
            <Note key={n.id} {...n} showLinkButton />
          ))}
        </Page>
      ) : (
        <Page noPaper noPadding middle>
          {"You don't have any note yet!"}
        </Page>
      )}
      <Button
        variant={hasNotes ? 'fab' : 'extendedFab'}
        color="primary"
        className={hasNotes ? css.fab : css.extendedFab}
        component={Link}
        to={newNoteRoute.path}
      >
        <AddIcon {...spreadIf(!hasNotes, { className: css.extendedFabIcon })} />
        {hasNotes ? null : 'Add note'}
      </Button>
    </>
  )
}

const NotesPage = compose(
  connect(mstp),
  withStyles(styles),
)(NotesPageJSX)

export default NotesPage

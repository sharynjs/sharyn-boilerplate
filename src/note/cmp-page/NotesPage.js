// @flow

import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { noteRoute, deleteNoteRoute, newNoteRoute } from 'note/note-routes'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add'
import Page from 'sharyn/components/Page'
import LinkIcon from '@material-ui/icons/Link'
import DeleteIcon from '@material-ui/icons/Clear'
import EditIcon from '@material-ui/icons/Edit'
import { clearfix } from 'sharyn/css/util'
import spreadIf from 'sharyn/util/spread-if'

const styles = ({ spacing, palette }) => ({
  fab: { position: 'absolute', bottom: spacing.unit * 3, right: spacing.unit * 3 },
  extendedFab: { extend: 'fab', paddingRight: spacing.unit * 3 },
  extendedFabIcon: { marginRight: spacing.unit },
  note: { ...clearfix, padding: spacing.unit * 3, marginBottom: spacing.unit * 3 },
  title: { marginTop: 0 },
  buttonGroup: { float: 'right' },
  deleteForm: { display: 'inline-block' },
  delete: { background: 'none', border: 'none', cursor: 'pointer', color: palette.error.main },
})

const mstp = ({ data }) => ({ notes: data.notes })

const NotesPageJSX = ({ classes: css, notes }: { classes: Object, notes: Object[] }) => {
  const hasNotes = notes.length > 0
  return (
    <>
      {hasNotes ? (
        <Page noPaper noPadding>
          {notes.map(n => (
            <Paper key={n.id} className={css.note}>
              <h3 className={css.title}>{n.title}</h3>
              {n.description && <p>{n.description}</p>}
              <div className={css.buttonGroup}>
                <IconButton color="primary" component={Link} to={noteRoute.path(n.id)}>
                  <LinkIcon />
                </IconButton>
                <IconButton component={Link} to="#">
                  <EditIcon />
                </IconButton>
                <form method="post" action={deleteNoteRoute.path(n.id)} className={css.deleteForm}>
                  <IconButton type="submit" className={css.delete}>
                    <DeleteIcon />
                  </IconButton>
                </form>
              </div>
            </Paper>
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

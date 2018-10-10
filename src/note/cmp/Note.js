// @flow

import React from 'react'

import Button from '@material-ui/core/Button'
import Progress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { connect as withRedux } from 'react-redux'
import Link from 'react-router-dom/Link'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import { graphqlThunk } from 'sharyn/redux/thunks'
import { clearfix } from 'sharyn/css/util'

import { deleteNoteCall } from 'note/note-calls'
import { noteRoute, editNoteRoute, deleteNoteRoute } from 'note/note-routes'

const NoteJSX = ({
  classes: css,
  id,
  title,
  description,
  useTitleLink,
  showActions,
  isDeleting,
  handleDeleteConfirm,
  isConfirmDeleteOpen,
  setIsConfirmDeleteOpen,
  isOnline = true,
}: {
  classes: Object,
  id: string,
  title: string,
  description?: string,
  useTitleLink?: boolean,
  showActions?: boolean,
  isDeleting?: boolean,
  handleDeleteConfirm?: Function,
  isConfirmDeleteOpen: boolean,
  setIsConfirmDeleteOpen: Function,
  isOnline?: boolean,
}) => (
  <Paper className={css.note}>
    <h3 className={css.title}>
      {useTitleLink ? <Link to={noteRoute.path(id)}>{title}</Link> : title}
    </h3>
    {description && <div className={css.description}>{description}</div>}
    {showActions &&
      isOnline && (
        <div className={css.buttonGroup}>
          <IconButton component={Link} to={editNoteRoute.path(id)}>
            <EditIcon />
          </IconButton>
          {isDeleting ? (
            <Progress className={css.deleteProgress} size={24} />
          ) : (
            <form
              method="post"
              action={deleteNoteRoute.path(id)}
              className={css.deleteForm}
              onSubmit={e => e.preventDefault() || setIsConfirmDeleteOpen(true)}
            >
              <IconButton type="submit">
                <DeleteIcon />
              </IconButton>

              <Dialog open={isConfirmDeleteOpen} onClose={() => setIsConfirmDeleteOpen(false)}>
                <DialogContent>
                  <DialogContentText>Delete this note?</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setIsConfirmDeleteOpen(false)}>Cancel</Button>
                  <Button
                    onClick={() =>
                      setIsConfirmDeleteOpen(false) ||
                      (handleDeleteConfirm && handleDeleteConfirm())
                    }
                    className={css.confirmDelete}
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </form>
          )}
        </div>
      )}
  </Paper>
)

export const NoteCmp = compose(
  withState('isConfirmDeleteOpen', 'setIsConfirmDeleteOpen', false),
  withStyles(({ spacing, palette }) => ({
    note: { ...clearfix, padding: spacing.unit * 3 },
    title: { margin: 0 },
    description: { marginTop: spacing.unit * 2 },
    buttonGroup: { float: 'right' },
    deleteForm: { display: 'inline-block' },
    confirmDelete: { color: palette.error.main },
    deleteProgress: { verticalAlign: 'middle', color: palette.error.main, margin: '0 12px' },
  })),
)(NoteJSX)

const Note = compose(
  withRedux(({ asyncMap, env }) => ({ isDeleting: asyncMap.deleteNote, isOnline: env.isOnline })),
  withHandlers({
    handleDeleteConfirm: ({ id, dispatch, routerHistory }) => () =>
      dispatch(
        graphqlThunk({
          ...deleteNoteCall,
          routerHistory,
          asyncKey: 'deleteNote',
          urlParams: { id },
        }),
      ),
  }),
)(NoteCmp)

export default Note

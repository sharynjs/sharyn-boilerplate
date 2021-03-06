// @flow

import React from 'react'

import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect as withRedux } from 'react-redux'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import formData from 'sharyn/client/form-data'
import ProgressButton from 'sharyn/components/ProgressButton'
import { invalidateFields, clearInvalidFields } from 'sharyn/redux/actions'
import { graphqlThunk } from 'sharyn/redux/thunks'

import { updateNoteCall, createNoteCall } from 'note/note-calls'
import { validateNoteInput } from 'note/note-validations'

const NoteFormJSX = ({
  classes: css,
  noteToEdit,
  isLoading,
  onSubmit,
  previousFields = {},
  invalidFields = [],
  isOnline = true,
}: {
  classes: Object,
  noteToEdit?: Object,
  isLoading?: boolean,
  onSubmit?: Function,
  previousFields?: Object,
  invalidFields?: Object[],
  isOnline?: boolean,
}) => (
  <form method="post" {...{ onSubmit }}>
    {invalidFields.map(inv => (
      <div key={inv.message} data-test="new-note-error" className={css.error}>
        {inv.message}
      </div>
    ))}
    <div className={css.field}>
      <TextField
        label="Title"
        name="title"
        defaultValue={previousFields.title ?? noteToEdit?.title}
        error={!!invalidFields.find(inv => inv.name === 'title')}
        autoFocus
        required
      />
    </div>
    <div className={css.field}>
      <TextField
        label="Description"
        name="description"
        defaultValue={previousFields.description ?? noteToEdit?.description}
        fullWidth
      />
    </div>
    <ProgressButton {...{ isLoading, isOnline }}>
      {noteToEdit ? 'Save' : 'Create note'}
    </ProgressButton>
  </form>
)

export const NoteFormCmp = withStyles(({ palette }) => ({
  field: { marginBottom: 15 },
  error: { marginBottom: 20, color: palette.error.main },
}))(NoteFormJSX)

const NoteForm = compose(
  withRedux(({ pageData, asyncMap, env }) => ({
    invalidFields: pageData.invalidFields,
    previousFields: pageData.previousFields,
    isLoading: asyncMap.noteForm,
    isOnline: env.isOnline,
  })),
  withHandlers({
    onSubmit: ({ noteToEdit, match, dispatch, routerHistory }) => e => {
      e.preventDefault()
      const fields = formData(e)
      const invalidFields = validateNoteInput(fields)
      dispatch(invalidFields ? invalidateFields(invalidFields) : clearInvalidFields())
      if (!invalidFields) {
        dispatch(
          graphqlThunk({
            ...(noteToEdit ? updateNoteCall : createNoteCall),
            routerHistory,
            urlParams: match.params,
            asyncKey: 'noteForm',
            fields,
          }),
        )
      }
    },
  }),
)(NoteFormCmp)

export default NoteForm

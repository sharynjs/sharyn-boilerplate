// @flow

import React from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import { withStyles } from '@material-ui/core/styles'
import withFields from 'sharyn/hocs/with-fields'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import formData from 'sharyn/client/form-data'
import { validateNoteInput } from 'note/note-validations'
import { invalidateFields, clearInvalidFields } from 'sharyn/client/actions'

const styles = ({ palette }) => ({
  field: { marginBottom: 15 },
  error: { marginBottom: 20, color: palette.error.main },
})

const mstp = ({ data }) => ({
  invalidFields: data.invalidFields,
  previousFields: data.previousFields,
})

type Props = {
  classes: Object,
  fields: Object,
  handleFieldChange: Function,
  onSubmit: Function,
  isEdit?: boolean,
  editFields?: Object,
  invalidFields?: Object[],
  previousFields?: Object,
}

const NoteFormJSX = ({
  classes: css,
  fields,
  handleFieldChange,
  onSubmit,
  isEdit,
  editFields,
  previousFields = {},
  invalidFields = [],
}: Props) => (
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
        value={fields.title ?? previousFields.title ?? editFields?.title ?? ''}
        onChange={handleFieldChange}
        error={!!invalidFields.find(inv => inv.name === 'title')}
        required
      />
    </div>
    <div className={css.field}>
      <TextField
        label="Description"
        name="description"
        value={fields.description ?? previousFields.description ?? editFields?.description ?? ''}
        onChange={handleFieldChange}
        fullWidth
      />
    </div>
    <Button variant="raised" color="primary" type="submit">
      {isEdit ? 'Save' : 'Create note'}
    </Button>
  </form>
)

const NoteForm = compose(
  withFields(),
  connect(mstp),
  withHandlers({
    onSubmit: ({ dispatch }) => e => {
      e.preventDefault()
      const invalidFields = validateNoteInput(formData(e))
      dispatch(invalidFields ? invalidateFields(invalidFields) : clearInvalidFields())
    },
  }),
  withStyles(styles),
)(NoteFormJSX)

export default NoteForm

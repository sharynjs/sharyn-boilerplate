// @flow

import React from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withFields from 'sharyn/hocs/with-fields'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = ({ palette }) => ({
  fieldsContainer: { marginBottom: 20 },
  error: { margin: '20px 0', color: palette.error.main },
})

const mstp = ({ data }) => ({ errorMessage: data.errorMessage, prefill: data.prefill })

type Props = {
  classes: Object,
  fields: Object,
  setField: Function,
  isEdit?: boolean,
  prefill?: Object,
  errorMessage?: string,
}

const NoteFormJSX = ({ classes: css, fields, setField, prefill, errorMessage, isEdit }: Props) => (
  <div>
    {errorMessage && (
      <div data-test="new-note-error" className={css.error}>
        {errorMessage}
      </div>
    )}
    <div className={css.fieldsContainer}>
      <TextField
        label="Title"
        name="title"
        value={fields.title ?? prefill?.title ?? ''}
        onChange={setField}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={fields.description ?? prefill?.description ?? ''}
        fullWidth
        multiline
        onChange={setField}
      />
    </div>
    <Button variant="raised" color="primary" type="submit">
      {isEdit ? 'Save' : 'Create note'}
    </Button>
  </div>
)
const NoteForm = compose(
  withFields,
  connect(mstp),
  withStyles(styles),
)(NoteFormJSX)

export default NoteForm

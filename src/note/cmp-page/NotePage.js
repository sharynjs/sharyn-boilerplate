// @flow

import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import flattenProp from 'recompose/flattenProp'
import withDefault from 'sharyn/hocs/with-default'

const mstp = ({ data }) => ({ note: data.note })

const NotePageJSX = ({ title, description }: { title: string, description?: string }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

const noNoteMsg = "Oops, couldn't find this note"
const NoNoteJSX = () => <h2>{noNoteMsg}</h2>

const NotePage = compose(
  connect(mstp),
  withDefault(({ note }) => note, NoNoteJSX),
  flattenProp('note'),
)(NotePageJSX)

export default NotePage

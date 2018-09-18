// @flow

import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import flattenProp from 'recompose/flattenProp'
import withDefault from 'sharyn/hocs/with-default'
import Page from 'sharyn/components/Page'
import Note from 'note/cmp/Note'

const mstp = ({ data }) => ({ note: data.note })

const NotePageJSX = ({ note }: { note: Object }) => (
  <Page noPaper noPadding maxWidth={600}>
    <Note {...note} />
  </Page>
)

const noNoteMsg = "Oops, couldn't find this note"
const NoNoteJSX = () => <h2>{noNoteMsg}</h2>

const NotePage = compose(
  connect(mstp),
  withDefault(({ note }) => note, NoNoteJSX),
  flattenProp('note'),
)(NotePageJSX)

export default NotePage

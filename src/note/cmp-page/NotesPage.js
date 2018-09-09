// @flow

import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { noteRoute } from 'note/note-routes'
import { Link } from 'react-router-dom'

import withDefault from 'sharyn/hocs/with-default'

const mstp = ({ data }) => ({ notes: data.notes })

const NotesPageJSX = ({ notes }: { notes: Object[] }) => (
  <ul>
    {notes.map(n => (
      <li key={n.id}>
        <Link to={noteRoute.path(n.id)}>{n.title}</Link>
      </li>
    ))}
  </ul>
)

const noNotesMsg = "You don't have any note yet, create one!"
const NoNotesJSX = () => <h2>{noNotesMsg}</h2>

const NotesPage = compose(
  connect(mstp),
  withDefault(({ notes }) => notes?.length, NoNotesJSX),
)(NotesPageJSX)

export default NotesPage

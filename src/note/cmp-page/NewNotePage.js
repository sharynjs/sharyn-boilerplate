// @flow

import React from 'react'
import Page from 'sharyn/components/Page'

import NoteForm from 'note/cmp/NoteForm'

// import parseFields from '_shared/parse-fields'
// import { fetchGraphQL } from '_shared/api-calls'
// import { loadPageSuccess } from '_client/duck'

// const handleSubmit = async (e, props) => {
//   e.preventDefault()
//   const { graphqlPost, history, dispatch } = props
//   const form = e.target
//   const fields = {}
//   // flow-disable-next-line
//   new FormData(form).forEach((value, key) => {
//     fields[key] = value
//   })
//   const parsedFields = parseFields(fields, graphqlPost.fieldTypes)
//   try {
//     const resp = await fetchGraphQL({
//       query: graphqlPost.query,
//       variables: graphqlPost.mapFields ? graphqlPost.mapFields(parsedFields) : parsedFields,
//     })
//     if (resp.errorMessage) {
//       dispatch(loadPageSuccess(resp))
//     } else if (graphqlPost.redirect) {
//       history.push(graphqlPost.redirect(await resp))
//     }
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.log(err)
//   }
// }

const NewNotePageJSX = () => (
  <Page maxWidth={600}>
    <NoteForm />
  </Page>
)

const NewNotePage = NewNotePageJSX

export default NewNotePage

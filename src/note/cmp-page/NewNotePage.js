// @flow

import React from 'react'
import { connect } from 'react-redux'

// import parseFields from '_shared/parse-fields'
// import { fetchGraphQL } from '_shared/api-calls'
// import { loadPageSuccess } from '_client/duck'

const mstp = ({ data }) => ({ errorMessage: data.errorMessage, prefill: data.prefill })

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

const NewNotePageJSX = ({ errorMessage, prefill }: { errorMessage?: string, prefill?: Object }) => (
  <form method="post">
    {errorMessage && <div>{errorMessage}</div>}
    <input name="title" required defaultValue={prefill?.title} />
    <textarea name="description" defaultValue={prefill?.description} />
    <button type="submit">Create note</button>
  </form>
)

const NewNotePage = connect(mstp)(NewNotePageJSX)

export default NewNotePage

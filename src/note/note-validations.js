// @flow

import Joi from 'joi'
import { swit } from 'sharyn/util'

export const noteInputSchema = Joi.object().keys({
  title: Joi.string()
    .max(20)
    .required(),
  description: Joi.string(),
})

export const validateNoteInput = (input: Object) => {
  const result = Joi.validate(input, noteInputSchema)
  return result.error
    ? result.error.details.map(e => ({
        name: e.path.toString(),
        message: swit(`${e.path.toString()}/${e.type}`, [
          ['title/string.max', 'The title must be shorter than 20 characters'],
        ]),
      }))
    : false
}

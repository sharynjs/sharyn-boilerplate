// @flow

import Joi from 'joi'

export const noteInputSchema = Joi.object().keys({
  title: Joi.string()
    .max(20)
    .required(),
  description: Joi.string(),
})

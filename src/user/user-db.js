// @flow

import { createQuery, knex } from 'sharyn/db'

export const USER = 'User'
const query = createQuery(USER)

export const createUser = async (id: string, input: Object) =>
  (await query()
    .insert({ id, ...input })
    .returning('*'))[0]

export const updateUser = async (id: string, input: Object) =>
  (await query()
    .update({ ...input, updatedAt: knex.fn.now() })
    .where({ id })
    .returning('*'))[0]

export const deleteUser = async (id: string) =>
  !!(await query()
    .where({ id })
    .del())

export const findUserByUsername = (username: string) =>
  query()
    .where({ username })
    .first()

export const getAllUsers = () => query()

export const findUser = (id: string) =>
  query()
    .where({ id })
    .first()

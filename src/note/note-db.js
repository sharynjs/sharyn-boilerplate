// @flow

import { createQuery, knex } from 'sharyn/db'

export const NOTE = 'Note'
const query = createQuery(NOTE)

export const createNote = async (userId: string, id: string, input: Object) =>
  (await query()
    .insert({ userId, id, ...input })
    .returning('*'))[0]

export const updateNote = async (userId: string, id: string, input: Object) =>
  (await query(userId)
    .update({ ...input, updatedAt: knex.fn.now() })
    .where({ id })
    .returning('*'))[0]

export const deleteNote = async (userId: string, id: string) =>
  !!(await query(userId)
    .where({ id })
    .del())

export const getAllNotes = (userId: string) => query(userId)

export const findNote = (userId: string, id: string) =>
  query(userId)
    .where({ id })
    .first()

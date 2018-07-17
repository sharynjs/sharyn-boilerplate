import { knex } from '@sharyn/db'
import { LOCAL_USER_ID as USER_ID } from '_db/seeds/001-user-notes'
import { NOTE, getAllNotes, createNote, findNote, updateNote, deleteNote } from './note-db'

beforeEach(() => knex(NOTE).del())

test('Note', async () => {
  expect(await getAllNotes()).toEqual([])
  const { id } = await createNote(USER_ID, { title: 'test-title' })
  const initialNote = await findNote(USER_ID, id)
  expect(initialNote).toMatchObject({
    userId: USER_ID,
    title: 'test-title',
    description: null,
  })
  const updatedNote = await updateNote(USER_ID, id, { description: 'test-description' })
  expect(updatedNote.updatedAt).not.toBe(initialNote.updatedAt)
  expect(updatedNote).toMatchObject({
    userId: USER_ID,
    title: 'test-title',
    description: 'test-description',
  })
  expect((await getAllNotes(USER_ID)).length).toBe(1)
  await deleteNote(USER_ID, id)
  expect(await getAllNotes()).toEqual([])
})

afterEach(() => knex.destroy())

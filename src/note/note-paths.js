// @flow

export const NOTES_PATH = '/'
export const NEW_NOTE_PATH = '/new-note'

export const notePath = (id: ?string) => `/note/${id || ':id'}`
export const editNotePath = (id: ?string) => `/note/edit/${id || ':id'}`
export const deleteNotePath = (id: ?string) => `/note/delete/${id || ':id'}`

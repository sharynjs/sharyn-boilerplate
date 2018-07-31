module.exports = ({ SESSION_SECRET_KEY }) => {
  if (!SESSION_SECRET_KEY) {
    throw Error('Missing SESSION_SECRET_KEY env variable')
  }
}

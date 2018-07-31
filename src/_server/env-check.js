module.exports = ({ SESSION_SECRET_KEY, IS_LOCAL_ENV }) => {
  console.log('======================')
  console.log(IS_LOCAL_ENV)
  if (!SESSION_SECRET_KEY) {
    throw Error('Missing SESSION_SECRET_KEY env variable')
  }

  if (!IS_LOCAL_ENV) {
    throw Error('Missing IS_LOCAL_ENV env variable')
  }
}

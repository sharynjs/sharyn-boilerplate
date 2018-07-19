// @flow

const routing = (router: Object) => {
  router.get('*', ctx => {
    ctx.body = 'it works'
  })
}

export default routing

/* eslint-disable no-undef */

// v0.1.0

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js')

workbox.routing.registerRoute(
  /.*\/static\/js\/.*/,
  workbox.strategies.cacheFirst({ cacheName: 'static' }),
)

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({ cacheName: 'google-fonts-stylesheets' }),
)

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [0, 200] }),
      new workbox.expiration.Plugin({ maxAgeSeconds: 60 * 60 * 24 * 365 }),
    ],
  }),
)

const uuid = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'

const baseUrls = ['http://localhost:8020', 'https://sharyn-boilerplate.herokuapp.com']

const pathsToNetworkFirst = ['/$', `/note/${uuid}$`]

baseUrls.forEach(baseUrl => {
  pathsToNetworkFirst.forEach(path =>
    workbox.routing.registerRoute(
      RegExp(`^${baseUrl}${path}`),
      workbox.strategies.networkFirst({ cacheName: 'all' }),
    ),
  )
})

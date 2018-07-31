const { VISUAL_PUPPETEER } = require('@sharyn/env')

module.exports = VISUAL_PUPPETEER ? { launch: { headless: false, slowMo: 25 } } : {}

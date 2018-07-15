// @flow

import { PORT, IS_PROD } from '@sharyn/env'

console.log(`Server [${PORT}] (${IS_PROD ? 'production' : 'development'})`)

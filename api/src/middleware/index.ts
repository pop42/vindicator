import { handleCors, handleBodyRequestParsing, handleCompression } from './common'

import { handleAPIDocs } from './api-docs'

export default [handleCors, handleBodyRequestParsing, handleCompression, handleAPIDocs]

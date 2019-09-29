import request from 'request-promise'
import * as Provider from './nhtsa'

jest.mock('request-promise')

describe('nhtsaProvider', () => {
  test('an empty query string', async () => {
    ;(request as any).mockImplementation(() => '')
    const result = await Provider.getVehicleSpecs('Bogus')
    expect(result).toBeNull
  })
})

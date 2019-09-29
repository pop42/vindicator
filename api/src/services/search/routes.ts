import { Request, Response } from 'express'
import { getVehicleSpecsByVin } from './search-controller'
import { checkSearchParams } from '../../middleware/checks'

export default [
  {
    path: '/api/v1/search',
    method: 'get',
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        try {
          const result = await getVehicleSpecsByVin(query.vin)
          res.status(200).send(result)
        } catch (error) {
          console.log({ error })
        }
      }
    ]
  }
]

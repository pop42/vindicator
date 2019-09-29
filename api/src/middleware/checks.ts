import { Request, Response, NextFunction } from 'express'
import { HTTP400Error } from '../utils/http-errors'

// export const checkSearchParams = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.query.q) {
//     throw new HTTP400Error('Missing q parameter')
//   } else {
//     next()
//   }
// }

export const checkSearchParams = (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.vin) {
    throw new HTTP400Error('Missing vin parameter')
  } else {
    next()
  }
}

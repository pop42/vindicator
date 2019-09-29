import request from 'request-promise'
import dotenv from 'dotenv'
import { tryParseJson } from '../../../utils/try-parse-json'

dotenv.config()

export const getVehicleSpecs = async (vin: string) => {
  const notVin = ''
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${notVin}?format=json`
  try {
    const response = await request(url)
    return tryParseJson(response)
  } catch (error) {
    console.log({ error })
  }
}

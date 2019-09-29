import { getVehicleSpecs } from './providers/nhtsa'
import { reduce, camelCase, isEmpty, isArray } from 'lodash'

export const getVehicleSpecsByVin = async (vin: string) => {
  try {
    interface VehicleSpecs {
      Count: number
      Message: string
      SearchCriteria: string
      Results: object[]
    }

    const results: VehicleSpecs = await getVehicleSpecs(vin)

    const primaryResult: any = results && isArray(results.Results) && results.Results[0]

    return reduce(
      primaryResult,
      (acc: any, value: any, key: string) => {
        if (!isEmpty(value)) {
          acc[camelCase(key)] = value
        }
        return acc
      },
      {}
    )
  } catch (error) {
    console.log({ error })
  }
}

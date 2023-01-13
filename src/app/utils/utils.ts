import { of } from 'rxjs'

const isProduction: boolean = false

// ********** PATHS **********

const developmentBaseUrl: string = 'http://localhost:4200/assets/'
const productionBaseUrl: string = ''

// ********** ENDPOINTS **********

export const getBankEndpoint: string = isProduction
  ? productionBaseUrl + 'bank.json'
  : developmentBaseUrl + 'bank.json'

export const getCreditorEndpoint: string = isProduction
  ? productionBaseUrl + 'creditor.json'
  : developmentBaseUrl + 'creditor.json'

// ********** LOGS **********

export const handleError = (error: Error, errorValue: any) => {
  console.error(error)
  return of(errorValue)
}

export const log = (resValue: any, res: any) => {
  console.log(`${resValue} =>`, res)
}

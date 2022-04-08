import { OBJECT_NAME, TEXTS } from '../constants'

export const requestOnError = (_event: Event) => {
  alert(TEXTS.dbRequestError)
}

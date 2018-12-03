import { INCREMENT } from '../constants'

export default (count = 10, action) => {
  return action.type === INCREMENT ? count + 1 : count
}

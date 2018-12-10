import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'

export default (state = arrToMap(normalizedComments), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    default:
      return state
  }
}

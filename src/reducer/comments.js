import {} from '../constants'
import { normalizedComments } from '../fixtures'

export default (commentsState = normalizedComments, action) => {
  const { type } = action

  switch (type) {
    default:
      return commentsState
  }
}

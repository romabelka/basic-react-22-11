import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'
import { arrToMap } from './utils'

export default (articles = arrToMap(defaultArticles), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articles }
      delete articlesCopy[payload.id]
      return articlesCopy

    case ADD_COMMENT:
      const article = articles[payload.articleId]
      return {
        ...articles,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    default:
      return articles
  }
}

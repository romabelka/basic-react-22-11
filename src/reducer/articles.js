import { Record } from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'
import { arrToMap } from './utils'

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
})

export default (articles = arrToMap(defaultArticles, ArticleRecord), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id)

    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, 'comments'], (comments) =>
        comments.concat(randomId)
      )

    default:
      return articles
  }
}

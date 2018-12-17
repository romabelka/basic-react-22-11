import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_FOR_PAGE,
  START,
  SUCCESS,
  FAIL
} from '../constants'
import { replace } from 'connected-react-router'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article' // { method: 'POST', url: '...'}
  }
}

/*
export function loadArticleById(id) {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `/api/article/${id}`
  }
}
*/

export function loadArticleById(id) {
  return (dispatch, getState) => {
    const article = getState().articles.entities.get(id)

    if (article && article.text) return

    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    fetch(`/api/article/${id}`)
      .then((res) => {
        if (res.status >= 400) throw new Error(res.statusText)

        return res.json()
      })
      .then((response) =>
        dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id },
          response
        })
      )
      .catch((error) => {
        dispatch(replace('/error'))

        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id },
          error
        })
      })
  }
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export function checkAndLoadCommentsForPage(page) {
  return (dispatch, getState) => {
    const {
      comments: { pagination }
    } = getState()
    if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return

    dispatch({
      type: LOAD_COMMENTS_FOR_PAGE,
      payload: { page },
      callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
    })
  }
}

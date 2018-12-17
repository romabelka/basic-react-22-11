import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import history from '../history'

export default combineReducers({
  counter: counterReducer,
  articles,
  comments,
  filters,
  router: connectRouter(history)
})

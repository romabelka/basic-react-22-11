import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles
})

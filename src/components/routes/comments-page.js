import React from 'react'
import CommentsPagination from '../comments-pagination'
import { Redirect, Route } from 'react-router-dom'

function CommentsPage({ match }) {
  if (match.isExact) return <Redirect to="/comments/1" />
  return <Route path="/comments/:page" render={getCommentsPaginator} />
}

function getCommentsPaginator({ match }) {
  return <CommentsPagination page={match.params.page} />
}

CommentsPage.propTypes = {}

export default CommentsPage

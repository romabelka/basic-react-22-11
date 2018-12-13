import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import CommentForm from './comment-form'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import { loadArticleComments } from '../ac'
import Loader from './common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: [],
  }

*/
  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props
    if (isOpen && !oldProps.isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen
    } = this.props
    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    const body = comments.length ? (
      <ul className="test__comment-list--body">
        {comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test__comment-list--empty">No comments yet</h3>
    )

    return (
      <div>
        {body}
        <CommentForm articleId={id} />
      </div>
    )
  }
}

/*
CommentList.propTypes = {

}
*/

export default connect(
  null,
  { loadArticleComments }
)(toggleOpen(CommentList))

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from '../comment-list'
import { connect } from 'react-redux'
import { deleteArticle } from '../../ac'

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen} className="test__article--btn">
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDeleteClick}>delete me</button>
        {this.getBody()}
      </div>
    )
  }

  handleDeleteClick = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default connect(
  null,
  { deleteArticle }
)(Article)

import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list'

function Article(props) {
  const { article, isOpen, toggleOpen } = props
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen} className="test__article--btn">
        {isOpen ? 'close' : 'open'}
      </button>
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return (
    <section className="test__article--body">
      {article.text}
      <CommentList comments={article.comments} />
    </section>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default Article

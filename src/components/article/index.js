import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from '../comment-list'
import { connect } from 'react-redux'
import { deleteArticle, loadArticleById } from '../../ac'
import Loader from '../common/loader'
import { articleSelector } from '../../selectors'
import i18n from '../i18n'

class Article extends Component {
  render() {
    const { article, t } = this.props
    if (!article) return null

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleDeleteClick}>{t('delete me')}</button>
        {this.getBody()}
      </div>
    )
  }

  componentDidMount() {
    const { isOpen, loadArticleById, id } = this.props

    if (isOpen) loadArticleById(id)
  }
  /*

  componentDidUpdate() {
    const { isOpen, loadArticleById, id } = this.props

    if (isOpen) loadArticleById(id)
  }

*/
  handleDeleteClick = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    if (article.loading) return <Loader />

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList article={article} />
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

export default i18n(
  connect(
    (state, props) => ({
      article: articleSelector(state, props)
    }),
    { deleteArticle, loadArticleById }
  )(Article)
)

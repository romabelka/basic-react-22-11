import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {
  articlesLoadedSelector,
  articlesLoadingSelector,
  filtratedArticlesSelector
} from '../selectors'
import { loadAllArticles } from '../ac'
import Loader from './common/loader'
import { NavLink } from 'react-router-dom'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  setListRef = (ref) => {
    this.list = ref
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  componentDidMount() {
    const { fetchAllArticles, loading, loaded } = this.props

    fetchAllArticles && !loading && !loaded && fetchAllArticles()
  }

  render() {
    console.log('---', 'render article list')
    if (this.state.error) return <h3>Error</h3>
    if (this.props.loading) return <Loader />
    return <ul ref={this.setListRef}>{this.articleItems()}</ul>
  }

  articleItems() {
    const { articles } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: 'red' }}>
          {article.title}
        </NavLink>
      </li>
    ))
  }
}

export default connect(
  (state) => {
    return {
      articles: filtratedArticlesSelector(state),
      loading: articlesLoadingSelector(state),
      loaded: articlesLoadedSelector(state)
    }
  },
  { fetchAllArticles: loadAllArticles }
)(accordion(ArticleList))

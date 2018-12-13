import React, { Component, Fragment } from 'react'
import ArticleList from '../article-list'
import { Route } from 'react-router-dom'
import Article from '../article'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <Fragment>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticlePage} />
      </Fragment>
    )
  }

  getArticlePage = ({ match }) => {
    return <Article id={match.params.id} isOpen />
  }
}

export default ArticlesPage

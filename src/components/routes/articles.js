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
        <Route path="/articles/:id" children={this.getArticlePage} />
        {/*
        {this.props.match.isExact && <h1>Select an Article</h1>}
*/}
      </Fragment>
    )
  }

  getArticlePage = ({ match }) => {
    if (!match) return <h1>Select an Article</h1>

    return <Article id={match.params.id} isOpen key={match.params.id} />
  }
}

export default ArticlesPage

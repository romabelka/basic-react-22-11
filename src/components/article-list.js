import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = (id) => (ev) => {
    this.setState((state) => {
      return {
        openArticleId: state.openArticleId === id ? null : id
      }
    })

    console.log('---', this.state.openArticleId)
  }

  render() {
    return <ul>{this.articleItems}</ul>
  }

  get articleItems() {
    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={this.state.openArticleId === article.id}
          toggleOpen={this.toggleOpenArticle(article.id)}
        />
      </li>
    ))
  }
}

export default ArticleList

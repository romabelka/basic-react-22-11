import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  setListRef = (ref) => {
    this.list = ref
    console.log('---', 'list: ', ref)
  }

  render() {
    return <ul ref={this.setListRef}>{this.articleItems()}</ul>
  }

  articleItems() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem(article.id)}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)

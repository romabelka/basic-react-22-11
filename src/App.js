import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import articles from './fixtures'
import ArticleList from './components/article-list'
import ArticlesChart from './components/articles-chart'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }

  setArticleListRef = (ref) => {
    window.articleList = ref

    console.log('---', 'article list: ', findDOMNode(ref))
  }
}

export default App

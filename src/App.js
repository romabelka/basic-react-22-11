import React, { Component } from 'react'
import articles from './fixtures'
import ArticleList from './components/article-list'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

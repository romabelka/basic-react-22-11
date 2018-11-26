import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import articles from './fixtures'
import ArticleList from './components/article-list'
import ArticlesChart from './components/articles-chart'
import UserForm from './components/user-form'
import Select from 'react-select'

class App extends Component {
  state = {
    selected: null
  }

  handleSelectionChange = (selected) => this.setState({ selected })

  render() {
    return (
      <div>
        <UserForm />
        <Select
          options={this.getOptions()}
          value={this.state.selected}
          onChange={this.handleSelectionChange}
          isMulti
        />
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }

  getOptions = () =>
    articles.map((article) => ({
      value: article.id,
      label: article.title
    }))

  setArticleListRef = (ref) => {
    window.articleList = ref

    console.log('---', 'article list: ', findDOMNode(ref))
  }
}

export default App

import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import ArticleList from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'

class App extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem to="/articles">Articles</MenuItem>
          <MenuItem to="/comments">Comments</MenuItem>
          <MenuItem to="/filters">
            <b>Filters</b>
          </MenuItem>
          <MenuItem to="/counter">Counter</MenuItem>
        </Menu>
        <UserForm />

        <Switch>
          <Redirect from="/" to="/articles" exact />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>New Article</h1>} />
          <Route path="/articles" component={ArticleList} />
          <Route path="/comments" component={CommentsPage} />
          <Route path="/error" render={() => <h1>Error Page</h1>} />
          <Route path="*" render={() => <h1>Not Found</h1>} />
        </Switch>
        {/*
        <Route path="/articles" exact render={() => <h1>Select an article</h1>} />
*/}
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticleList from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: 'red' }}>
              articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: 'red' }}>
              filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: 'red' }}>
              counter
            </NavLink>
          </div>
        </div>
        <UserForm />

        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>New Article</h1>} />
          <Route path="/articles" component={ArticleList} />
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

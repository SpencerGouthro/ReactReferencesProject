import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import App from './App';
import CategoriesList from './components/CategoriesList';
import CategoryForm from './components/CategoryForm';

class Routes extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={App} />
          <Route path='/categories' type='add' component={CategoriesList} />
          <Route path='/editCategory' type='edit' component={CategoryForm} />
        </div>
      </HashRouter>
    )
  }
}

export default Routes;
import React from 'react'
import './scss/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import BlogAll from './pages/blog/BlogAll';
import BlogCategoryAll from './pages/blog/BlogCategoryAll'
import BlogViewDetails from './pages/blog/BlogViewDetails'
import DynamicPage from './pages/DynamicPage'
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blogs' component={BlogAll} />
          <Route exact path='/blogs/:category' component={BlogCategoryAll} />
          <Route exact path='/blogs/:category/:blogurl' component={BlogViewDetails} />
          <Route exact path='/login' component={Login} />


          <Route exact path='/:custompage' component={DynamicPage} />

        
        </Switch>
      </Router>
    </>
  )
}

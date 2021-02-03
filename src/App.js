import React from 'react'
import './scss/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Home from './pages/Home'
import BlogAll from './pages/blog/BlogAll';
import BlogCategoryAll from './pages/blog/BlogCategoryAll'
import BlogViewDetails from './pages/blog/BlogViewDetails'
import DynamicPage from './pages/DynamicPage'
import Login from './pages/Login';
import Register from './pages/Register'

import Forgotpassword from './pages/Forgotpassword';
import MyAccount from './pages/myaccount/MyAccount';


export default function App() {
  return (
    <>
      <ReactNotification />

      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blogs' component={BlogAll} />
          <Route exact path='/blogs/:category' component={BlogCategoryAll} />
          <Route exact path='/blogs/:category/:blogurl' component={BlogViewDetails} />
          <Route exact path='/login' component={Login} />
         
          <Route exact path='/register' component={Register} />

          <Route exact path='/forgotpassword' component={Forgotpassword} />


          <Route exact path='/myaccount' component={MyAccount} />







          <Route exact path='/:custompage' component={DynamicPage} />

        
        </Switch>
      </Router>
    </>
  )
}

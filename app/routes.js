import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main.js'

import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const NotFoundRoute = Router.NotFoundRoute

const routes = (
 <Route path='/' component={Main}>
   
 </Route>
)

ReactDOM.render(<Router history={appHistory} routes={routes} />, document.getElementById('react-container'));




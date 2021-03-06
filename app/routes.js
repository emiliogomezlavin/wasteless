import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import cookie from 'react-cookie';
import axios from 'axios'

import Main from './components/main.js'
import Whoops404 from './components/404.js'
import Dashboard from './components/dashboard.js'
import DashboardView from './components/partials/dashboard_view.js'
import PastDonations from './components/past_donations.js'
import Pickups from './components/pickups.js'
import LeaderBoard  from './components/leader_board.js'
import Following from './components/following.js'
import Donations from './components/donations.js'
import Profile from './components/profile.js'
import EditProfile from './components/profile_edit.js'


import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const NotFoundRoute = Router.NotFoundRoute

// Need create a function that checks to see if there is a Cookie
// Use onEnter for react and pass an object

const requireAuth = (nextState, replace) => {
  var user = cookie.load("userId")
  console.log(user);
}

const routes = (
  <Router history={appHistory}>
    <Route component={Main} >
      <Route path='/' component={Dashboard} >
        <Route path='dashboard' component={DashboardView} />
        <Route path='past_donations' component={PastDonations} />
        <Route path='upcoming_pickups' component={Pickups} />
        <Route path='leaderboard' component={LeaderBoard} />
        <Route path='following' component={Following} />
        <Route path='profile' component={Profile} >
          <Route path='edit_profile' component={EditProfile} />
        </Route>
      </Route>
      <Route path='/donations' component={Donations} />
      <Route path="*" component={Whoops404} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('react-container'));

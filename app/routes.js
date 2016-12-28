import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';

import Main from './components/main.js'
import Whoops404 from './components/404.js'
import Dashboard from './components/dashboard.js'
import PastDonations from './components/past_donations.js'
import Pickups from './components/pickups.js'
import LeaderBoard  from './components/leader_board.js'
import Following from './components/following.js'
import Donations from './components/donations.js'
import Profile from './components/profile.js'


import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const NotFoundRoute = Router.NotFoundRoute

const routes = (
  <Router history={appHistory}>
    <Route component={Main} >
      <Route path='/' component={Dashboard}>    
        <Route path='/past_donations' component={PastDonations} />
        <Route path='/upcoming_pickups' component={Pickups} />
        <Route path='/leaderboard' component={LeaderBoard} />
        <Route path='/following' component={Following} />
        <Route path='/profile' component={Profile} />
      </Route>
      <Route path='/donations' component={Donations} />
      <Route path="*" component={Whoops404} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('react-container'));

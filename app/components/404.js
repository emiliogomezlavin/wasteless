import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

var Whoops404 = React.createClass({
  render() {
    return (
      <div id="not-found">
        <h1>Whoops something went wrong...</h1>
        <p>We cannot find the page that you have requested.</p>
      </div>
    )
  }
})

export default Whoops404

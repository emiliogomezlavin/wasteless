import axios from 'axios'
import React from 'react'

class Dashboard extends React.Component {
  constructor(props){
      super(props);
      this.state = {users: null};
    }

    componentDidMount(){
      let _this = this;
      let currentSession;

      this.serverRequest =
        axios.get('/sign_in')
          .then(function(res){
            console.log(res.data.passport)
            currentSession = res.data.passport.user;
          }.bind(this))
        .then(function(){
          axios.get('/api/users/' + currentSession)
            .then(function(res){
              console.log(res.data);
              _this.setState({
                user: res.data
            })
          }.bind(this));
        })

    }

    // componentWillUnmount(){
    //   this.serverRequest.abort()
    // }

    render() {
      console.log(this.state);
      if (this.state.user) {
        return (
          <div id="user">
            <div className="container">
              {this.state.user.data.map(function(user, index){
                return (
                  <div key={index}>
                    <ul className="user-profile">
                      <li>{user.first_name}</li>
                      <li>{user.last_name}</li>
                      <li>{user.email}</li>
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="left">
              <ul>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
              <a href="#" class="open">&rarr;</a>
            </div>
          </div>
        )
    }

    return (<div>Loading... </div>)
    }
}

export default Dashboard

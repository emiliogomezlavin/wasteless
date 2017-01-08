import axios from 'axios'
import React from 'react'
import { Link } from 'react-router';

class Profile extends React.Component {
  constructor(props){
      super(props);
      this.state = {user: null};
    }

    componentDidMount(){
      let _this = this;
      let currentSession;

      this.serverRequest =
        axios.get('/sign_in')
          .then(function(res){
            currentSession = res.data.passport.user;
          }.bind(this))
        .then(function(){
          axios.get('/api/users/' + currentSession)
            .then(function(res){
              // console.log(res.data);
              _this.setState({
                user: res.data
            })
          }.bind(this));
        })
    }

    render() {
      if (this.state.user) {
        return (
          <section id="user">
            <div className="container">
              {this.state.user.data.map(function(user, index){
                return (
                  <div key={index}>
                    <h3>{user.username}&rsquo;s Profile</h3>
                    <ul className="user-profile">
                      <li>First Name: {user.first_name}</li>
                      <li>Last Name: {user.last_name}</li>
                      <li>Email: {user.email}</li>
                      <li>Address: {user.address}</li>
                      <li>City: {user.city}</li>
                      <li>State: {user.state}</li>
                      <li>Phone Number: {user.phone_number}</li>
                      <li></li>
                    </ul>
                  </div>
                )
              })}
              <div><Link to="/profile/edit_profile">Edit Profile</Link></div>
              <div>{this.props.children}</div>
            </div>
          </section>
        )
    }

    return (<div id="user">You need to login...</div>)
    }
}

export default Profile

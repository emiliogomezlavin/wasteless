import React from 'react'

class EditProfile extends React.Component {
  render() {
    console.log(this.state)
    return (
      <div id="edit-profile-form">
        <h3>Edit Profile</h3>
        <p>Something {user.username}</p>
      </div>
    )
  }
}

export default EditProfile

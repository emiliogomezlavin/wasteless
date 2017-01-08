import React from 'react'

class NewDonation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {description: '', contents: ''}
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getInitialState() {
  //   return {
  //     description: "",
  //     contents: ""
  //   }
  // }

  setValue(field, event) {
    var donation = {};
    donation[field] = event.target.value;
    this.setState(donation);
  }

  handleSubmit(event) {
    event.preventDefault();

    var newDonation = {}
    var description = this.state.description;
    var contents = this.state.contents;

    if (description.length > 0 ) {
      this.state.description = "";
      newDonation.description = description;
    }

    if (contents.length > 0) {
      this.state.contents = "";
      newDonation.contents = contents;
    }
    
    this.props.onDonationSubmit(newDonation);
  }

  render() {
    let description = this.props.description;
    let contents = this.props.contents;
    let donator = this.props.donator;

    return (
      <div id="donation_card">
        <p> Please enter the information for the donation you want to share with the community </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.description} onChange={this.setValue.bind(this, 'description')} placeholder="Enter the description of the donation"/>
          </div>
          <div>
            <textarea value={this.state.contents} onChange={this.setValue.bind(this, 'contents')} placeholder="Enter the contents of the donation"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewDonation
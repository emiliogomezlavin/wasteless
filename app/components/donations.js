
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router';
import DonationCard from './partials/donation_card.js'
import DonationMap from './partials/donation_map.js'



// class NewDonation extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {description: '', contents: ''}
//     // this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // getInitialState() {
//   //   return {
//   //     description: "",
//   //     contents: ""
//   //   }
//   // }

//   setValue(field, event) {
//     var donation = {};
//     donation[field] = event.target.value;
//     this.setState(donation);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
    
//     var newDonation = {}
//     var description = this.state.description;
//     var contents = this.state.contents;

//     if (description.length > 0 ) {
//       this.state.description = "";
//       newDonation.description = description;
//     }

//     if (contents.length > 0) {
//       this.state.contents = "";
//       newDonation.contents = contents;
//     }
    
//     this.props.onDonationSubmit(newDonation);
//   }

//   render() {
//     var description = this.props.description;
//     var contents = this.props.contents;
//     var donator = this.props.donator;

//     return (
//       <div id="donation_card">
//         <p> Please enter the information for the donation you want to share with the community </p>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input type="text" value={this.state.description} onChange={this.setValue.bind(this, 'description')} placeholder="Enter the description of the donation"/>
//           </div>
//           <div>
//             <textarea value={this.state.contents} onChange={this.setValue.bind(this, 'contents')} placeholder="Enter the contents of the donation"></textarea>
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

var donationArray = [];
let currentSession;

const DonationList = ({donations}) => {
  // Map through the todos
  const donationNode = donations.map((donation, index) => {
    return (
    	<div key={index}>
    		<DonationCard description={donation.description} contents={donation.contents} donator={donation.donator_id} id={donation.id}/>
    	</div>)
  });
  return (<div className="list-group" style={{marginTop:'30px'}}>{donationNode}</div>);
}


class Donations extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {donations: donationArray, description: '', contents: '', currentSession: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  setValue(field, event) {
    var donation = {};
    donation[field] = event.target.value;
    this.setState(donation);
  }

  componentDidMount(){
  	let _this = this;
  	this.serverRequest = 
  		axios.get('/sign_in')
          .then(function(res){
            this.state.currentSession = res.data.passport.user;
          }.bind(this))
        .then(function(){
          axios.get('/api/donations')
			  		.then(function(res){
			  			_this.setState({
			  				donations: res.data.data
			  		})
			  		donationArray = this.state.donations;
			  	}.bind(this))
        })

  }


  handleDonationSubmit(event){
  	event.preventDefault();

    var newDonation = {};
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

		axios.post('/api/donations/new', {
		    description: newDonation.description,
		    contents: newDonation.contents
		  })
      .then(function(res){
      		console.log("after it's saved in the backend", res.data);	
        	donationArray.push(res.data.data[0])
        	console.log(donationArray);
        	this.setState({donations: donationArray})
        }.bind(this))
      .catch(function(err){
      	console.log(err);
      	}.bind(this))
	}

  render() {

  	var description = this.props.description;
    var contents = this.props.contents;
    var donator = this.props.donator;

    if (this.state.donations) {
    	return (
	      	<div id="donations">
	      		<DonationMap />
		      	<DonationList donations={this.state.donations} />
		      	<form onSubmit={this.handleDonationSubmit}>
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
	

	return (<div>Loading... </div>)
  }
}

// <NewDonation onDonationSubmit={this.handleDonationSubmit} />	
export default Donations

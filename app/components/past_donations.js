import React from 'react'

class PastDonations extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchString: "" }
  }
  render() {


    var data = [
        { name: 'React', url: 'http://facebook.github.io/react/'},
        { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
        { name: 'Angular2', url: 'https://angular.io/'},
        { name: 'AngularJS', url: 'https://angularjs.org/'},
        { name: 'Ember', url: 'http://emberjs.com/'},
        { name: 'Express', url: 'http://expressjs.com/'},
        { name: 'Ruby on Rails', url: 'http://guides.rubyonrails.org/'},
        { name: 'Lodash', url: 'http://lodash.com/'},
        { name: 'Moment', url: 'http://momentjs.com/'},
        { name: 'Koa', url: 'http://koajs.com/'}
      ]

    var searchString = this.state.searchString.trim().toLowerCase()

    if(searchString.length > 0){
      data = data.filter(function(d){
        return d.name.toLowerCase().match( searchString )
      })
    }

    return (
      <div>
        <input type='text' value={this.state.searchString} onChange={this.handleChange} placeholder='Search'/>
        <ul>
          { data.map( function(d){
            return <li key={d.id}>{d.name} <a target='_blank' href={d.url}>{d.url}</a></li>
          })}
        </ul>
      </div>
    )
  }
}

export default PastDonations

import React from 'react'


const SAN_FRANCISCO = {
  lat: 37.7749,
  lng: -122.4194
};

class DonationMap extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: SAN_FRANCISCO,
      zoom: 12
    });
  }
  
  render() {
    return (
      <div>
        <div ref="map" className="map"></div>
      </div>
    )
  }
}

export default DonationMap

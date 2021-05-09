import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
position: 'relative',
  width: '94%',
  height: '60%'
};
export class MapContainer extends Component {
   
    render() {
      return (
        <Map google={this.props.google}
            style={mapStyles}
          initialCenter={{
            lat: 12.995480,
            lng: 77.530880
          }}
          center={{lat: 12.995480,
            lng: 77.530880}}>
          <Marker position ={{lat: 12.995480,
            lng: 77.530880}}/>
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
  apiKey: (`${process.env.REACT_APP_googlekey}`)
})(MapContainer);
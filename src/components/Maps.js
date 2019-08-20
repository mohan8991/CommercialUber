import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import car from '../logo/car-top-icon-10.jpg'

import React from 'react'

class Maps extends React.Component{
    constructor(props){
        super(props)
        this.state =  {loc : {lat:13.0827, lng: 80.2707}};
        this.state.zoom = 10;
    }

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState(
                    {loc : {lat:position.coords.latitude, lng:position.coords.longitude}});
            }
        );
    };

    render(){
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                zoom={this.state.zoom}
                // defaultCenter={{lat:13.0827, lng: 80.2707}}
                center={{lat: this.state.loc.lat, lng: this.state.loc.lng}}
            >
                <Marker
                    name={'My Location'}
                    position={{lat: this.state.loc.lat, lng: this.state.loc.lng}}
                    title={'Your Current Location'}
                    icon={{
                        url: car,
                        scaledSize: { width: 40, height: 40 }
                    }}
                />
            </GoogleMap>
        ));
        return(
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDlaVs2vrduR5P6uhzwKy8INmzTivsAhs&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `761px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        )
    }
}
export default Maps;
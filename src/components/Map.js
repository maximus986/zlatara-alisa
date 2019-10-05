import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker, } from 'react-google-maps';
  import MapStyles from '../static-data/mapStyles';
  import styles from '../styles/contact.module.css';


export default class Map extends Component {
  render() {
    const GoogleMapZA = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 44.808788, lng: 20.482993 }}
        defaultZoom = { 17 }
        options={{ styles: MapStyles }}
        >
          <Marker position={{ lat: 44.808788, lng: 20.482993 }}/>
        </GoogleMap>
    )))
    return (
      // Add GATSBY_ to env before push. Also in env files
      <GoogleMapZA
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={ <div style={{ height: `500px`, width: '100%' }} className={styles.map}/> }
        mapElement={ <div style={{ height: `100%` }} /> }
      />
    )
  }
}

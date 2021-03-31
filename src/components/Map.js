import React from 'react'
import GoogleMapReact from 'google-map-react';
import BranchMarker from './BranchMarker';
import HomeMarker from './HomeMarker';

function Map({center, zoom, branches}) {

    /*Mapping all the branches into BranchMarker compnents, passing down lat, long and branch info into props*/
    const markers = branches.map(branch => {
        return <BranchMarker key={branch.id} branchInfo={branch} lat={branch.location.latitude} lng={branch.location.longitude} />
    });

    return (
        <div style={{ height: '100vh', width: '100%', position:"relative" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBlJUsNEfEjjhr25EtceIDhbYp4YOBIGuo'}}
                center = { center }
                zoom = { zoom }
            >
                {/*The array of BranchMarker components*/}
                {markers}
                {/*Displaying a home marker onto the searched location*/}
                {markers.length? <HomeMarker lat={center.lat} lng={center.lng} />:null}
            </GoogleMapReact>
        </div>
    )
}

export default Map

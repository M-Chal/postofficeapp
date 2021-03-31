import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import CloseIcon from '@material-ui/icons/Close';
import useToggle from '../hooks/useToggle';

import '../styles/Marker.css';

function BranchMarker({branchInfo}) {
    /*Custom useToggle hook*/
    const [showingInfo, toggleShowingInfo] = useToggle(false);
    
    /*While this could be it's own component, to keep things simple I wanted to display the info box here*/
    const showInfo = () =>{
        return(
            <div className="infoBox">
                <CloseIcon style={{marginLeft:"80%"}} onClick={() => toggleShowingInfo()}/>
                <div>
                    <h1>{branchInfo.name}</h1>
                    <p>{branchInfo.address}</p>
                    <p>{branchInfo.postCode}</p>
                    <p>Opening Time: {branchInfo.earliestOpeningTime}</p>
                    <p>Closing Time: {branchInfo.latestClosingTime}</p>
                    <p>Distance: {branchInfo.distanceFromSearchLoc} Miles</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/*Ternary operator to show the info if the showingInfo state is true, else it's showing null*/}
            {showingInfo? showInfo() : null}
            <RoomIcon style={{color:"red", fontSize:"2rem",position: 'absolute', transform: 'translate(-50%, -50%)'}} onClick={() => toggleShowingInfo()}/>
        </div>
    )
}

export default BranchMarker

import React from 'react';
import marker_point from './marker_point.png';

const MapMarkers = (props) => {

    return (
      <div className="marker-pin">
        <img src={marker_point} alt="pin"/>
      </div>
    );
}

export default MapMarkers;

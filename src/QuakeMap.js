import React, {Component} from 'react';
import data from './dataset/data061116.json';
import GoogleMap from 'google-map-react';
import MapMarkers from './MapMarkers';

class QuakeMap extends Component {

  static defaultProps = {
    center: [32.500, 130.7079],
    zoom: 8,
  };

  render() {

    const dataset = data.features;

    return (
      <div className="map-container">
        <GoogleMap style={{height: 650, width: 800, position: "relative"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {dataset.map(item => <MapMarkers
                                  key={String(item.properties.time)}
                                  lat={item.geometry.coordinates[1]}
                                  lng={item.geometry.coordinates[0]}
                                  text={item.properties.mag} />)}
        </GoogleMap>
      </div>
    );
  }
}

export default QuakeMap;

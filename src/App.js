import React from 'react';
import QuakeTable from './TableComponents/QuakeTable';
import DepthMagnitudeChart from './ChartComponents/DepthMagnitudeChart';
import QuakeMap from './MapComponents/QuakeMap';

const App = () => {
  return (
      <div>
          <QuakeMap />
          <QuakeTable />
          <DepthMagnitudeChart />
      </div>
  );
}

export default App;

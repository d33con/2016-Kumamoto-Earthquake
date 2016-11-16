import React from 'react';
import QuakeTable from './QuakeTable';
import DepthMagnitudeChart from './DepthMagnitudeChart';
import QuakeMap from './QuakeMap';

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

import React from 'react';
import data from './dataset/data061116.json';
import { ComposedChart, Bar, Area, XAxis, YAxis, Tooltip, ReferenceLine, Legend } from 'recharts';
var moment = require('moment');

const InfoTooltip = (props) => {
  const { active } = props;

  const removeNegative = (depth) => {
    return String(depth).slice(1)
  }

    if (active) {
      const { payload, label } = props;
      return (
        <div className="custom-tooltip">
          <p>{`${label}`}</p>
          <p>Magnitude: {`${payload[1].value / 10}`}</p>
          <p>Depth: {removeNegative(payload[0].value)}km</p>
        </div>
      );
    }

    return null;
}

const DepthMagnitudeChart = () => {

      const dataset = data.features;
      let chartData = dataset.map(function(item) {
        return {
          "depth" : 0 - item.geometry.coordinates[2],
          "time": moment(item.properties.time).format("MMM Do HH:mm"),
          "magnitude": item.properties.mag * 10,
        };
      });

      return (
        <div className="depth-mag-chart">
          <h2>Magnitude vs. Depth Chart</h2>
          <ComposedChart width={1100} height={720} data={chartData} margin={{ top: 5, right: 70, bottom: 5, left: 5 }}>
            <Legend verticalAlign="top" height={50} />
            <Area type="monotoneY" dataKey="depth" stroke="#1B1D1C" fill="#1B1D1C" name="Depth" unit=" km" />
            <Bar dataKey="magnitude" barSize={4} name="Magnitude" fill="#EF3E4A" />
            <XAxis name="Date & Time" dataKey="time" tick={false} />
            <ReferenceLine y={0} stroke='#000' label="Ground" />
            <YAxis tick={false} domain={[-165,80]} />
            <Tooltip content={<InfoTooltip/>} />
          </ComposedChart>
        </div>
      );
}

export default DepthMagnitudeChart;

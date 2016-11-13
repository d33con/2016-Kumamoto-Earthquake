import React from 'react';
import { Cell } from 'fixed-data-table';
var moment = require('moment');

const TimeCell = ({rowIndex, field, data, ...props}) => {
  return (
    <Cell {...props}>
      {moment(data[rowIndex].properties[field]).format("ddd, MMMM Do YYYY, h:mm a")}
    </Cell>
  );
}

export default TimeCell;

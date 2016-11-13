import React from 'react';
import { Cell } from 'fixed-data-table';
var moment = require('moment');

const TimeBetweenQuakesCell = ({rowIndex, field, data, ...props}) => {

    let timeOfPreviousQuake;
    let timeOfNextQuake = moment(data[rowIndex].properties[field]);
    (rowIndex === 0) ? timeOfPreviousQuake = moment(data[rowIndex].properties[field]) : timeOfPreviousQuake = moment(data[rowIndex-1].properties[field]);

    return (
      <Cell {...props}>
        {timeOfNextQuake.from(timeOfPreviousQuake, true)}
      </Cell>
    );
}

export default TimeBetweenQuakesCell;

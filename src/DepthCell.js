import React from 'react';
import { Cell } from 'fixed-data-table';

const DepthCell = ({rowIndex, field, data, ...props}) => {
    return (
      <Cell {...props}>
        {data[rowIndex].geometry[field][2]}
      </Cell>
    );
}

export default DepthCell;

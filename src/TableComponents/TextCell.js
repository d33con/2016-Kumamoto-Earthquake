import React from 'react';
import { Cell } from 'fixed-data-table';

const TextCell = ({rowIndex, field, data, ...props}) => {
    return (
      <Cell {...props}>
        {data[rowIndex].properties[field]}
      </Cell>
    );
}

export default TextCell;

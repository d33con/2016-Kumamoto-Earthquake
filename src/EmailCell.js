import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';

class EmailCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

export default EmailCell;

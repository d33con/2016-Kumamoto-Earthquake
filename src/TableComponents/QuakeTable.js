import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import data from '../dataset/data061116.json';
import TimeCell from './TimeCell';
import TextCell from './TextCell';
import DepthCell from './DepthCell';
import TimeBetweenQuakesCell from './TimeBetweenQuakesCell';
import 'fixed-data-table/dist/fixed-data-table.min.css';

const QuakeTable = () => {

    return (
        <div className="table-container">
            <Table
              headerHeight={50}
              rowsCount={data.features.length}
              rowHeight={50}
              width={800}
              height={510}>
                <Column
                  header={<Cell> Date and Time </Cell>}
                  cell={<TimeCell data={data.features} field="time" />}
                  width={230}/>
                <Column
                  header={<Cell> Time between earthquakes </Cell>}
                  cell={<TimeBetweenQuakesCell data={data.features} field="time" />}
                  width={140}/>
                <Column
                  header={<Cell> Magnitude </Cell>}
                  align="center"
                  cell={<TextCell data={data.features} field="mag" />}
                  width={90}/>
                <Column
                  header={<Cell> Depth(km) </Cell>}
                  align="center"
                  cell={<DepthCell data={data.features} field="coordinates" />}
                  width={90}/>
                <Column
                  header={<Cell> Location </Cell>}
                  cell={<TextCell data={data.features} field="place" />}
                  width={250}/>
            </Table>
            <div className="total">Total: {data.features.length}</div>
        </div>
    );
}

export default QuakeTable;

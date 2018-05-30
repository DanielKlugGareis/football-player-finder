import React from 'react';
import { Filters } from '../modules/filters';
import { Table } from '../modules/table';

const Main = () => (
  <div className="filter-container">
    <Filters />
    <Table />
  </div>
);

export default Main;
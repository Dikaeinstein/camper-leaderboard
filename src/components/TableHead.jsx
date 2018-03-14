import React from 'react';
import PropTypes from 'prop-types';

const TableHead = (props) => {
  const style = {
    textDecoration: 'underline',
    cursor: 'pointer',
  };
  const handleClickRecent = () => {
    props.onClick('recent');
  };

  const handleClickAlltime = () => {
    props.onClick('alltime');
  };

  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Camper Name</th>
        <th
          scope="col"
          onClick={handleClickRecent}
          style={style}
        >
          Points in past 30 days
          <span className="oi oi-sort-descending ml-1" />
        </th>
        <th
          scope="col"
          onClick={handleClickAlltime}
          style={style}
        >
          All time points
          <span className="oi oi-sort-descending ml-1" />
        </th>
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TableHead;

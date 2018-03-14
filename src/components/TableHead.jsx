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
        </th>
        <th
          scope="col"
          onClick={handleClickAlltime}
          style={style}
        >
          All time points
        </th>
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TableHead;

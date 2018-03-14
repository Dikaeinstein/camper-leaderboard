import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import TableRow from './TableRow';

const TableBody = (props) => {
  const rows = props.campers.map((camper, idx) => (
    <TableRow
      key={uuidv1()}
      index={idx + 1}
      username={camper.username}
      imgUrl={camper.img}
      recent={camper.recent}
      alltime={camper.alltime}
    />
  ));

  return (<tbody>{rows}</tbody>);
};

TableBody.propTypes = {
  campers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;

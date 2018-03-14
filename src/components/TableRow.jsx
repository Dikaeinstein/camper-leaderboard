import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const style = {
    width: '40px',
    maxHeight: '40px',
  };

  const baseUrl = 'https://www.freecodecamp';
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>
        <a className="text-light" href={`${baseUrl}/${props.username}`}>
          <img
            src={props.imgUrl}
            alt={props.username}
            className="img-fluid mr-2"
            style={style}
          />
          {props.username}
        </a>
      </td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>
    </tr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  recent: PropTypes.number.isRequired,
  alltime: PropTypes.number.isRequired,
};

export default TableRow;

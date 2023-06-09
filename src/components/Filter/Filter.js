import React from "react";
import PropTypes from 'prop-types';

function Filter({ filter, handleFilterChange }) {
  return (
    <div>
      <label htmlFor="filterInput">Find contacts by name</label>
      <input
        id="filterInput"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
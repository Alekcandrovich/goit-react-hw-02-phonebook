import React from "react";
import PropTypes from 'prop-types';
import css from './filter.module.css';

function Filter({ filter, handleFilterChange }) {
  return (
    <div>
      <label className={css.filterLabel} htmlFor="filterInput">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
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
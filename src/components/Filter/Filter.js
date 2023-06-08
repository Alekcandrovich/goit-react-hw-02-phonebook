import React from "react";

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

export default Filter;
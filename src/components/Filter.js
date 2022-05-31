import React from 'react';

function Filter({ onCategoryChange }) {
   return <select name="filter" onChange={onCategoryChange}></select>;
}

export default Filter;

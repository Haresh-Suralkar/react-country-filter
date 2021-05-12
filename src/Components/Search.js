import React from 'react'

function Search(props) {
    return (
      <input data-testid="filterInput" className="large" placeholder="Enter Country Name" onChange={e => {props.setSearchTerm(e.target.value)}}/>
  	);
}

export default Search;

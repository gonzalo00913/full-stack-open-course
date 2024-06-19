import React from 'react'

const Filter = ({filterName, handleSearchChange }) => {
  return (
    <div>
    filter shown with <input value={filterName} onChange={handleSearchChange}/>
  </div>
  )
}

export default Filter
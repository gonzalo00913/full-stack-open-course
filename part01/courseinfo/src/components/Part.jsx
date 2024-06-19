import React from 'react'

const Part = ({part, exercises}) => {
  console.log("part", part)
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

export default Part
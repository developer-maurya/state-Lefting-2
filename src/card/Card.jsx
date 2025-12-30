import React from 'react'

const card = (props) => {
  return (
    <div>
        <input type='text' onChange ={(e) => props.setName(e.target.value   )}/>
        <p> {props.tittle} :{props.name}</p>
    </div>
  )
}

export default card
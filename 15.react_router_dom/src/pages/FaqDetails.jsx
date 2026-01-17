import React from 'react'
import { useParams } from 'react-router-dom'

function FaqDetails() {
    const parameter=useParams();
    console.log(parameter.kaha);
  return (
    <div>
        <h1>yo My Man</h1>
    </div>
  )
}

export default FaqDetails
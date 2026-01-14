import React from 'react'
import LeftCenter from './LeftCenter'
import RightCenter from './RightCenter'

const Center = (props) => {
  return (
    <div className='flex py-10 px-18 h-[90vh] items-center gap-10'>
      <LeftCenter />
      <RightCenter user={props.user} /> 
    </div>
  )
}

export default Center
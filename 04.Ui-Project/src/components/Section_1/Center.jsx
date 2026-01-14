import React from 'react'
import LeftCenter from './LeftCenter'
import RightCenter from './RightCenter'

const Center = () => {
  return (
    <div className='flex py-10 px-18 h-[90vh] items-center gap-10'>
      <LeftCenter />
      <RightCenter /> 
    </div>
  )
}

export default Center
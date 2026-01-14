import React from 'react'
import RightCard from './RightCard'

const RightCenter = (props) => {
  return (
    <div className=' w-3/4 h-full p-6 flex flex-nowrap gap-5 overflow-x-auto'>
     {props.user.map(function(card,id){
      return <RightCard key={id}  id={id} img={card.img} color={card.color} tags={card.tag}/>
     })}
    </div>
  )
}

export default RightCenter
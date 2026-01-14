import React from 'react'

const RightcardText = (props) => {
 console.log(props)
  return (
    <div className="absolute top-0 left-0 h-full w-full  px-4 py-5 flex flex-col justify-between
      ">
        <h2 className="font-bold bg-amber-50 rounded-4xl h-10 w-10 flex items-center justify-center">{props.id+1}</h2>
       <div>
        <p className="text-lg leading-normal text-white mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          aliquid suscipit quae, nemo sapiente alias dicta nostrum id itaque
          blanditiis?
        </p>
        <div  className="flex justify-between  ">
            <button style={{backgroundColor:props.color}} className=" text-white font-light rounded-full px-7 py-2 ">{props.tags}</button>
            <button className="bg-amber-200 text-white font-light rounded-full px-4 py-2 "><i className="ri-arrow-right-line"></i></button>
        </div>
       </div> 
      </div>
  )
}

export default RightcardText
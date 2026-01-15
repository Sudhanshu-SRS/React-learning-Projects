import React from 'react'
import { Bookmark } from "lucide-react";
export const Card = (val) => {
   
  return (
     
      <div className="card">
        <div><div className="top">
          <img
            src={val.Logo}
            alt=""
          />
          <button>
            Save Me <Bookmark size={12}/>
          </button>
        </div>
        <div className="center">
          <h3>
           { val.CompanyName} <span>{val.Dp}</span>
          </h3>
          <h2>{val.role}</h2>
          <div className="tags">
            <h4>{val.tag1}</h4>
            <h4>{val.tag2}</h4>
          </div>
        </div></div>
        <div className="bottm">
          <div>
            <h4>{val.pay}</h4>
            <p>{val.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
     

  
  )
}

import React from "react";
import RightcardText from "./RightcardText";

const RightCard = (props) => {
  
  return (
    <div className="w-80 h-full shrink-0 overflow-hidden rounded-4xl relative">
      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt=""
      />
      <RightcardText id={props.id} color={props.color} tags={props.tags} />

    </div>
  );
};

export default RightCard;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
 function Submithandler(e){
  e.preventDefault();
  console.log("form Submitted");
 }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e)=>{ Submithandler(e)

      }}  className="flex lg:w-1/2 flex-col items-start p-10 gap-5">
       <h1 className="text-3xl">Your Notes Details</h1>
        <input
          type="text"
          placeholder="Enter Your Notes"
          className="px-5 py-2 w-full border-2 rounded "
        />
        <textarea
          name="notes"
          id=""
          placeholder="Enter THe Details"
          className="px-5 py-2 w-full border-2 rounded "
        ></textarea>
        <button className="px-5 py-2 w-full border-2 bg-white text-black rounded">
          Submit
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-3xl">Your Notes</h1>
        <div className="flex flex-wrap mt-5 gap-5 ">
          <div className="bg-white h-52 w-40 rounded-2xl "></div>
          <div className="bg-white h-52 w-40 rounded-2xl "></div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

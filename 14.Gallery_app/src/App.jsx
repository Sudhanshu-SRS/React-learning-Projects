import { useEffect, useEffectEvent, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {

const [userdata, setUserdata] = useState([])
 

 const getdata=async ()=>{
  const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
  setUserdata(response.data);
 }
 
 




  return (
    <div className="bg-black h-screen text-white overflow-y-auto">
      <div className="flex flex-col items-start p-5 gap-5 ">
        <button onClick={getdata} className="bg-green-400 px-4 py-1 rounded-2xl">
          Get Image
        </button>
        <h2>No Image Availiable </h2>
      </div>

      <div className="flex flex-wrap  gap-4 p-10  ">
        {userdata.map((ele,id)=>{
          return <div key={id} className="w-48 text-center">
          <img
            src={ele.download_url}
            alt="nature"
            className="mx-auto rounded-lg h-48 w-48 object-cover"
          /> 
          <h3 className="text-sm font-semibold flex justify-center mb-5">{ele.author}</h3>
        </div>
        })}

      </div>
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1)
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserdata(response.data);
  };

 useEffect(()=>{
  getdata()
 },[index])

  let userdetail = "No User Data";
  if (userdata.length > 0) {
    userdetail = userdata.map((val, id) => {
      return (
        <div key={id}>
          <a href={val.url} target="_blank">
            <div className="flex flex-col text-center">
              <div className="w-40 h-48 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={val.download_url}
                  alt=""
                />
              </div>
              <h3>{val.author}</h3>
            </div>
          </a>
          
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto text-white">
      
        {/* <button
          onClick={getdata}
          className="bg-amber-300 text-black px-3 py-2 rounded-4xl "
        >
          Get Image
        </button> */}
        <div >
          <div className="flex flex-wrap gap-4 p-5">{userdetail}</div>

          <div className="flex justify-center gap-5 mb-5">
            <button onClick={()=>{if(index>1){setIndex(index-1)}
              
            }} className="bg-yellow-300 text-black px-5 py-2 ">perv</button>
            <button onClick={()=>{
              setIndex(index+1)
            }} className="bg-yellow-300 text-black px-5 py-2 ">next</button>
          </div>
        </div>
      </div>
    
  );
};

export default App;

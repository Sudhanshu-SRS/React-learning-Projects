import axios from "axios";
import { useState } from "react";

const App = () => {
  const [userdata, setUserdata] = useState([]);

  const getdata = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setUserdata(response.data);
  };

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
      <div className="p-5 flex flex-col items-start gap-4 ">
        <button
          onClick={getdata}
          className="bg-amber-300 text-black px-3 py-2 rounded-4xl "
        >
          Get Image
        </button>
        <div className="flex flex-wrap gap-4 ">
          <div>{userdetail}</div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useContext } from "react";
import { nameContext } from "../Context/NameContext";

const Home = () => {
  let [name, set] = useContext(nameContext);
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          set("CodeWithSudhanshu");
        }}
      >
        To Change The Value 
      </button>
    </div>
  );
};

export default Home;

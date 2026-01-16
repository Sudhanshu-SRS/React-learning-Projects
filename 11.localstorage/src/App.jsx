import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  {
    /* Local Storage Set*/
  }

  const name = localStorage.setItem("apun_ka_naam", "Sudhanshu");
  console.log(name);

  {
    /* Local Storage Get*/
  }
  const getName = localStorage.getItem("user");
  console.log(getName);

  {
    /* Local Storage Remove Item */
  }
  localStorage.removeItem("lastSelectedSize");

 
  return <></>;
}

export default App;

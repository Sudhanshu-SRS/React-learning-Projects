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

  {
    /* Local Storage How Save Array and Object */
  }
  const arr = [1, 2, 4, 5, 6, 7, 8, 9, 0];
  const array = localStorage.setItem("array", JSON.stringify(arr));
  console.log(array);
  {
    /* To get array from local storage */
  }
  const getarray = JSON.parse(localStorage.getItem("array"));
  console.log(getarray);

  

  return <></>;
}

export default App;

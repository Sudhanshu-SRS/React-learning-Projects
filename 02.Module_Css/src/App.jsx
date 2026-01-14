import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button />
      <Header />
    </>
  );
}

export default App;

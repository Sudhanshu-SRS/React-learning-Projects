import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Title, setTitle] = useState("");

  function handelechange(e) {
    setTitle(e.target.value);
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submited by ", Title);
          setTitle("");
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={Title}
          onChange={(e) => {
            handelechange(e);
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;

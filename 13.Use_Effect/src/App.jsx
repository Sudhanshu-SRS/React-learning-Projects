import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // 👉 Ye function sirf side-effect ke liye hai
  // React render ke baad call hoga
  const logCountChange = () => {
    console.log("Count change ho chuka hai:", count);
  };

  /*
    useEffect ka matlab:
    - Jab component render ho
    - Aur jab count change ho
    Tab ye code chale
  */
  useEffect(() => {
    console.log("useEffect chal gaya");
    logCountChange();

    // Cleanup (abhi kuch nahi, bas example)
    return () => {
      console.log("Cleanup before next effect");
    };
  }, [count]); // 👈 Dependency: sirf count

  return (
    <>
      <h1>{count}</h1>

      {/* Button click par state change hota hai */}
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </>
  );
}

export default App;

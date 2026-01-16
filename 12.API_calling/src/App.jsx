import axios from "axios";
import "./App.css";

function App() {

  // ❌ Ye function synchronous hai
  // fetch turant Promise return karta hai (pending state)
  function fetchdata() {
    const data = fetch("https://jsonplaceholder.typicode.com/todos/1");

    // Yahan data abhi resolve nahi hua
    // Isliye console me Promise { <pending> } dikhega
    console.log(
      "Sirf fetch use karne par (without async/await) Promise pending milta hai"
    );
    console.log(data);
  }

  // ✅ Ye function asynchronous hai
  // async & await use karke hum response ka wait kar rahe hain
  const fetchdata1 = async () => {

    // await ka matlab: jab tak response na aaye, wait karo
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log(
      "async/await use karne par Promise resolve hota hai"
    );

    // response.json() bhi ek Promise hota hai
    // await lagane se actual data milta hai
    const data = await response.json();

    // Ab hume proper JSON data mil chuka hai
    console.log(data);
  };

 const fetchdata2= async()=>{
  const data=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  console.log(data.data);
 }




  return (
    <div className="container">
      {/* Button click par dono functions call honge */}
      <button
        onClick={() => {
          fetchdata();   // Promise pending example
          fetchdata1();  // Promise resolved example
          fetchdata2();  // Axios example
        }}
      >
        Fetch
      </button>
    </div>
  );
}

export default App;

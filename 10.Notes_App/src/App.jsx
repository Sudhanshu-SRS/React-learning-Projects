import { useState } from "react";

import "./App.css";

function App() {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Task, setTask] = useState([]);

  function Submithandler(e) {
    e.preventDefault();

    const newTask = [...Task];
    newTask.push({ Title, Details });
    setTask(newTask);
    console.log(newTask);
    setTitle("");
    setDetails("");
  }

  const deleteTask = (index) => {
    const newTask = [...Task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          Submithandler(e);
        }}
        className="flex lg:w-1/2 flex-col items-start p-10 gap-5"
      >
        <h1 className="text-3xl">Your Notes Details</h1>
        <input
          type="text"
          placeholder="Enter Your Notes"
          className="px-5 py-2 w-full border-2 rounded "
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name="notes"
          id=""
          placeholder="Enter THe Details"
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="px-5 py-2 w-full border-2 rounded "
        ></textarea>
        <button className="px-5 py-2 w-full border-2 bg-white text-black rounded">
          Submit
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-3xl">Your Notes</h1>
        <div className="flex flex-wrap items-start justify-items-start mt-5 gap-5 h-full overflow-auto">
          {Task.map(function (elem, ind) {
            return (
              <div
                key={ind}
                className="flex flex-col h-52 w-40 min-h-0 overflow-hidden
             bg-cover rounded-2xl p-4 text-black
             bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <h3 className="text-xl font-semibold leading-tight wrap-break-word">
                  {elem.Title}
                </h3>

                <p className="text-sm text-gray-500 leading-tight wrap-break-word mt-4">
                  {elem.Details}
                </p>

                <button
                  onClick={() => deleteTask(ind)}
                  className="mt-auto bg-red-500 text-white px-4 py-1 rounded-full"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

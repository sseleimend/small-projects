import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-red-600");

  return (
    <div className={"w-full h-screen duration-200 " + color}>
      <div className="fixed flex-wrap justify-center flex bottom-12 inset-x-0 px-2">
        <div className="flex-wrap justify-center flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
          <button
            className="outline-none px-4 py-1 rounded-full bg-red-600 shadow-lg"
            onClick={() => setColor("bg-red-600")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-green-600 shadow-lg"
            onClick={() => setColor("bg-green-600")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-blue-600 shadow-lg"
            onClick={() => setColor("bg-blue-600")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

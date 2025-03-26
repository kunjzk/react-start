import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-black">
          <button onClick={() => setColor("red")}>red</button>
          <button onClick={() => setColor("black")}>black</button>
          <button onClick={() => setColor("green")}>green</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myObject = {
    name: "Anand Jha",
    channel: "Anand Jha Official",
  };

  return (
    <>
      <h1 className="bg-green-100 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card channel="Test Props" someObj={myObject} />
      <Card />
      <Card />
    </>
  );
}

export default App;

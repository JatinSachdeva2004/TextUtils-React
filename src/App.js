import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {" "}
      <Navbar title="Textutilities" mode={mode} toggleMode={toggleMode} />{" "}
      <Alert alert="this is alert" />
      <div className="container my-3">
        <Textform heading="YOYO" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;

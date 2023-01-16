import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [personnas, setPersonnas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        // console.log(res.data)
        setPersonnas(res.data.personas);
      });
  });
  return (
    <div className="App">
      <ul>
        {personnas.map((p, key) => (
          <li key={key}>{p.name}</li>
        ))}
      </ul>
      <input type="text" value={}/>
    </div>
  );
}

export default App;

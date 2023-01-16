import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [personnas, setPersonnas] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });
  useEffect(() => {
    axios
      .get("http://localhost:3000/", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        // console.log(res.data)
        setPersonnas(res.data.personas);
      });
  }, []);
  // il y'a une dipendency

  return (
    <div className="App">
      <ul>
        {personnas.map((p, key) => (
          <li key={key}>{p.name}</li>
        ))}
      </ul>
      {/* <input type="text" value={}/>
       */}
      <input
        type="text"
        value={newPerson.name}
        onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
      />
      <input
        type="text"
        value={newPerson.age}
        onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
      />
      <button
        onClick={() =>
          axios
            .post("http://localhost:3000/person", newPerson, {
              headers: { "Access-Control-Allow-Origin": "*" },
            })
            .then((r) => setPersonnas([r.data]))
        }
      >
        Ajouter
      </button>
    </div>
  );
}

export default App;

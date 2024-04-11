import { useState } from "react";
import "./App.css";
import Componente from "./components/Componente";
import Contador from "./components/Contador";
import Filter from "./components/Filter";
import Ref from "./components/Ref";

function App() {
  const [mostrarContador, setMostrarContador] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Componente numero={14} />
      <button onClick={() => setMostrarContador(!mostrarContador)}>{mostrarContador ? "Ocultar Contador" : "Mostrar Contador"}</button>
      {mostrarContador && <Contador />}
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <Filter></Filter>
      <Ref />
    </div>
  );
}

export default App;

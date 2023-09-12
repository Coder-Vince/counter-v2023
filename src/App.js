import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import Footer from "./components/Footer";

// library.add(faEnvelope);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Header />
      <div className="container">
        <Decrement counter={counter} setCounter={setCounter} />
        <div className="counter">{counter}</div>
        <Increment counter={counter} setCounter={setCounter} />
      </div>
      <Reset setCounter={setCounter} />
      <Footer />
    </div>
  );
}

export default App;

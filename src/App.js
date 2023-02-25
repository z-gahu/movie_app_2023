import React from "react";
import "./App.css";
// import { HashRouter, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    // <HashRouter>
    //   <Route path="/about" component={About} />
    // </HashRouter>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={isLoggedIn ? <Dashboard />:<Login/>} path="/dashboard"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

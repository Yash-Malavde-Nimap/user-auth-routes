import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
// import UserContext from "./context/UserContext"; // Ensure you're importing UserContextProvider
// import { useContext } from "react";

const App = () => {
  // const { isLoggedIn } = useContext(UserContext);
  // const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </div>
  );
};

export default App;

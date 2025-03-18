import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import { Register } from "./components/Register";
// import { Dashboard } from "./components/Dashboard";
import Home from "./components/Home.jsx";
import React, { Suspense } from "react";
import Loading from "./components/Loading.jsx";
import Admin from "./components/Admin.jsx";

// const Home = React.lazy(() => import("../src/components/Home.jsx"));
// const Login = React.lazy(() => import("../src/components/Login.jsx"));
const Register = React.lazy(() => import("../src/components/Register.jsx"));
const Dashboard = React.lazy(() => import("../src/components/Dashboard.jsx"));

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Admin />} path="/admin" />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

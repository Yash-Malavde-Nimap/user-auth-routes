import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "40px 20px",
        fontFamily: "sans-serif",
        backgroundColor: "#F3E5F5",
        height:'100vh',
        fontSize:'30px' 

      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;

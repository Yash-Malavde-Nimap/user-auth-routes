/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ErrorLogout = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F3E5F5",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ color: "#ff6b6b", fontSize: "32px" }}>
          You are not logged into your account
        </h1>
        <p style={{ color: "#333", fontSize: "18px", marginTop: "10px" }}>
          Please log in to access your account to access the {props.page}
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Link
            to="/login"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 30px",
              backgroundColor: "#8E24AA",
              color: "white",
              fontSize: "16px",
              textDecoration: "none",
              borderRadius: "5px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7B1FA2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8E24AA")}
          >
            Login Now
          </Link>
          <Link
            to="/"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 30px",
              backgroundColor: "#8E24AA",
              color: "white",
              fontSize: "16px",
              textDecoration: "none",
              borderRadius: "5px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7B1FA2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8E24AA")}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorLogout;

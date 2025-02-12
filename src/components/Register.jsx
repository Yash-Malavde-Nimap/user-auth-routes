import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // State for email, password, and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("#4CAF50");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Logged In successfully");
    }

    setEmail("");
    setPassword("");
  };

  const handleMouseEnter = () => {
    setButtonColor("#0000CD");
  };

  const handleMouseLeave = () => {
    setButtonColor("#4CAF50");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F3E5F5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 8px 8px rgba(0, 0, 0, 0.5)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
            fontFamily: "sans-serif",
          }}
        >
          Register
        </h2>

        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: "14px",
              fontFamily: "sans-serif",
              color: "#333",
              marginBottom: "5px",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // onKeyPress={handleKeyPressEmail}
            required
            style={{
              width: "100%",
              padding: "10px",
              fontFamily: "sans-serif",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontSize: "14px",
              fontFamily: "sans-serif",
              color: "#333",
              marginBottom: "5px",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onKeyPress={handleKeyPressPW}
            required
            style={{
              width: "100%",
              padding: "10px",
              fontFamily: "sans-serif",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            style={{
              padding: "12px",
              fontFamily: "sans-serif",
              fontSize: "16px",
              backgroundColor: buttonColor,
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Register
          </button>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            Already an User,{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

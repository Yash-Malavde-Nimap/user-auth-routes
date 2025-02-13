import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("#4CAF50");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  const handleRegister = (e) => {
    e.preventDefault();

    if(!email.match(emailRegex)){
      alert('Please enter a proper email')
      setEmail("");
      return
    }
    
    if(!password.match(passwordRegex)){
      alert('Password should contain \n\nMinimum 8 characters in length.\nAt least one uppercase English letter.[A-Z]\nAt least one lowercase English letter.[a-z]\nAt least one digit.\nAt least one special character')
      setPassword("");  
      return
    }

    login(email,password);
    navigate('/dashboard')
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
        onSubmit={handleRegister}
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems:'center',
          // justifyItems:'center',
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
              // maxWidth:'100%',
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
        </div>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Already have an account? Login{" "} 
          <span>
            <Link to="/login">here</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
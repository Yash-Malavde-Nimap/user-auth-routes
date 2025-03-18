import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { emailRegex, passwordRegex, userSchema } from "../lib/constants";

const Login = () => {
  const localData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localData || userSchema);
  const [buttonColor, setButtonColor] = useState("#4CAF50");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.email.match(emailRegex)) {
      alert("Please enter a proper email");
      setUser((user.email = ""));
      return;
    }

    if (!user.password.match(passwordRegex)) {
      alert(
        "Password should contain \n\nMinimum 8 characters in length.\nAt least one uppercase English letter.[A-Z]\nAt least one lowercase English letter.[a-z]\nAt least one digit.\nAt least one special character"
      );
      setUser((user.password = ""));
      return;
    }

    if (user.role === "") {
      alert("Please Select Role");
      return;
    }

    login(user);

    //Redirecting to their respective logins role wise
    if (user.role === "admin") {
      navigate("/admin");
    } else if (user.role === "user") {
      navigate("/dashboard");
    }
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
        autoComplete="off"
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems:'center',
          // justifyItems:'center',
          padding: "40px 20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 40px 80px rgba(0, 0, 0, 0.5)",
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
          Login
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
            name="email"
            value={user.email}
            onChange={handleChange}
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
              outline: "none",
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
            name="password"
            value={user.password}
            onChange={handleChange}
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
              outline: "none",
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <select
            style={{
              padding: "10px 5px",
              borderRadius: "4px",
              outline: "none",
            }}
            name="role"
            id=""
            value={user.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
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
            Login
          </button>
        </div>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Create an account{" "}
          <span>
            <Link to="/register">here</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function that stores user data in localStorage
  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Logout function that removes user data from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  // Function to check if user is logged in
  const isAuthenticated = user !== null;

  return (
    <UserContext.Provider value={{ login, logout, isAuthenticated, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

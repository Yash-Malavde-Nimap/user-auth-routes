/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function that stores user data in localStorage
  const login = (email, password) => {
    const userData = { email, password };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function that removes user data from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Function to check if user is logged in
  const isAuthenticated = user !== null;


  return (
    <UserContext.Provider
      value={{ login, logout, isAuthenticated, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

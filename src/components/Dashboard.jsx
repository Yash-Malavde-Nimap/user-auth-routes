import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import ErrorLogout from "./ErrorLogout";
import { usersArray } from "../lib/constants";

const Dashboard = () => {
  const { isAuthenticated, user, logout } = useContext(UserContext);

  if (!isAuthenticated) {
    return (
      <>
        <ErrorLogout
          page="Dashboard"
          message="You must be an User to Access the Dashboard"
        />
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F3E5F5",
        fontFamily: "sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          height: "100vh",
          position: "sticky",
          top: "0px",
          backgroundColor: "#6A1B9A",
          color: "white",
          // padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // alignItems:"center"
          paddingLeft: "20px",
        }}
      >
        <h2 style={{ color: "#fff", fontSize: "32px", paddingTop: "30px" }}>
          Dashboard
        </h2>

        <nav
          style={{
            marginBottom: "20px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "20px" }}>
              <Link to="/profile" style={linkStyle}>
                Profile
              </Link>
            </li>
            {user.role === "admin" && (
              <>
                <li style={{ marginBottom: "20px" }}>
                  <Link to="/admin" style={linkStyle}>
                    Admin Panel
                  </Link>
                </li>
              </>
            )}
            <li style={{ marginBottom: "20px" }}>
              <Link to="/settings" style={linkStyle}>
                Settings
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <p
                to="/logout"
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onClick={logout}
              >
                Logout
              </p>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "30px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6A1B9A",
            color: "white",
            padding: "20px 30px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "36px", margin: 0 }}>Welcome Back!</h1>
          <div style={{ fontSize: "20px" }}>
            <span>
              Logged in as: <strong> {user.email}</strong>
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {/* Widget 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Activity</h3>
            <p style={{ color: "#333" }}>
              Recent activity and updates will show here.
            </p>
          </div>

          {/* Widget 2 */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Stats</h3>
            <p style={{ color: "#333" }}>
              Key performance metrics and stats will appear here.
            </p>
          </div>

          {/* Widget 3 */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Notifications</h3>
            <p style={{ color: "#333" }}>
              Recent notifications and alerts will appear here.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            // background: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {usersArray?.map((item, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                // gap:'20px'
                // margin:'10px'
                justifyContent: "center",
                alignContent: "center",
                padding: "20px",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <h2>{item.name}</h2>
                {user.role === "admin" && (
                  <>
                    <button
                      style={{
                        color: "red",
                        padding: "1px 4px",
                      }}
                    >
                      X
                    </button>
                  </>
                )}
              </div>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const linkStyle = {
  color: "white",
  fontSize: "20px",
  textDecoration: "none",
  transition: "color 0.3s",
};

export default Dashboard;

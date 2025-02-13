import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        // padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#F3E5F5',
        height: '100vh',
        fontSize: '24px',
        color: '#5E35B1',
      }}
    >
      <h1 style={{ color: '#6A1B9A', fontSize: '40px', fontWeight: '700' }}>Welcome to Our Site</h1>
      <p style={{ fontSize: '18px', color: '#7B1FA2', maxWidth: '400px', textAlign: 'center' }}>
        Explore the features by logging in or registering. Access your dashboard once you are logged in.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link
          to="/login"
          style={{
            textDecoration: 'none',
            backgroundColor: '#8E24AA',
            padding: '15px 30px',
            color: 'white',
            fontSize: '18px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#7B1FA2')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#8E24AA')}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            textDecoration: 'none',
            backgroundColor: '#D81B60',
            padding: '15px 30px',
            color: 'white',
            fontSize: '18px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C2185B')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#D81B60')}
        >
          Register
        </Link>

        <Link
          to="/dashboard"
          style={{
            textDecoration: 'none',
            backgroundColor: '#6A1B9A',
            padding: '15px 30px',
            color: 'white',
            fontSize: '18px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#5E35B1')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#6A1B9A')}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

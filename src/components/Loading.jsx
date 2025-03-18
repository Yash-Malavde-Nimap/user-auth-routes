const Loading = () => {
  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#F3E5F5", 
  };

  const spinnerStyle = {
    border: "8px solid #f3f3f3", 
    borderTop: "8px solid #8e24aa", 
    borderRadius: "50%", 
    width: "60px", 
    height: "60px", 
    animation: "spin 2s linear infinite", 
  };

  return (
    <div style={loaderContainerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;

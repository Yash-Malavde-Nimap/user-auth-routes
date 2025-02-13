const Loading = () => {
  // Inline CSS for the loader
  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full screen height
    backgroundColor: "#F3E5F5", // Dark background color
  };

  const spinnerStyle = {
    border: "8px solid #f3f3f3", // Light gray border
    borderTop: "8px solid #8e24aa", // Green color for the spinning part
    borderRadius: "50%", // Make it round
    width: "60px", // Width of the spinner
    height: "60px", // Height of the spinner
    animation: "spin 2s linear infinite", // Spin animation
  };

  return (
    <div style={loaderContainerStyle}>
      {/* Add the animation keyframes via a style tag */}
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

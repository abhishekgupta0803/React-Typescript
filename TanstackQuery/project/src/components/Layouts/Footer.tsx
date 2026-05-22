import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1e293b",
        color: "#ffffff",
        textAlign: "center",
        padding: "16px",
        marginTop: "40px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} My React App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
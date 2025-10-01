import React from "react";

const EnvBanner = () => {
  // NODE_ENV is always "production" on Vercel,
  // so we check VERCEL_ENV instead
  if (process.env.VERCEL_ENV === "production") {
    return null; // hide banner on prod
  }

  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        padding: "4px",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      🧪 STAGING ENVIRONMENT
    </div>
  );
};

export default EnvBanner;
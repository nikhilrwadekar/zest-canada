import React from "react";

export default function Icon({ imageSrc, caption }) {
  return (
    <span style={{ padding: "1rem", margin: "1rem" }}>
      <img src={imageSrc} style={{ width: 200, height: 200 }} />
      <h3>{caption}</h3>
    </span>
  );
}

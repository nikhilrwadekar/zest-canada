import React from "react";

export default function Icon({ imageSrc, caption }) {
  return (
    <span style={{ padding: "1rem", margin: "1rem" }}>
      <img src={imageSrc} style={{ width: 150, height: 150 }} />
      <h3 style={{ display: "inline" }}>{caption}</h3>
    </span>
  );
}

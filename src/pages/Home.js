import React from "react";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: "left" }}>ZEST</h1>
      <h2
        style={{
          backgroundColor: "black",
          color: "#fff",
          fontSize: "4rem",
          padding: "1rem 2rem",
          textAlign: "left",
        }}
      >
        Copy & Print
      </h2>

      <div className="Icons" style={{ textAlign: "left" }}>
        <Icon
          imageSrc={process.env.PUBLIC_URL + "/icons/print.svg"}
          caption="Print it."
        />
        <Icon
          imageSrc={process.env.PUBLIC_URL + "/icons/box.svg"}
          caption="Pack it."
        />
        <Icon
          imageSrc={process.env.PUBLIC_URL + "/icons/delivery-truck.svg"}
          caption="Ship it."
        />
      </div>
    </>
  );
}

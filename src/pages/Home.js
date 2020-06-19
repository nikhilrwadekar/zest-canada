import React from "react";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <h1>ZEST</h1>
      <h2>Copy & Print</h2>

      <div className="Icons">
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

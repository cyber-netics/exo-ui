import React from "react";
import { mount } from "@cypress/react";

describe("Test Run", () => {
  it("renders a basic component", () => {
    const Button = () => (
      <button onClick={() => console.log("...")}>Submit</button>
    );

    mount(<Button />);
    cy.get("button").click();
  });
});

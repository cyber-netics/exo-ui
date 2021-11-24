import React from "react";
import { mount } from "@cypress/react";
import Button, { ButtonProps } from "Components/Button";

const Element: React.FC<ButtonProps> = (props) => (
  <Button className="btn-element" {...props}>
    {props.children}
  </Button>
);

describe("Element", () => {
  it("Child", () => {
    mount(<Element>Submit</Element>);
    cy.get(".btn-element").should("contain", "Submit");
    mount(<Element>Element</Element>);
    cy.get(".btn-element").should("contain", "Element");
  });
});

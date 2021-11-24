import React from "react";
import { mount } from "@cypress/react";
import Input, { InputProps } from "Components/Input";

import { ISizeTypes } from "Shared"; //types
import { primaryHeight } from "Shared";

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<InputProps> = (props) => (
  <Input className="input-element" {...props} />
);

describe("Sizing", () => {
  const verifySize = (sizeType: ISizeTypes, size: string, css: string) => {
    cy.get(".input-element").should("have.css", css, size);
    cy.log(`Size: ${sizeType} - ${size}`);
  };

  describe("Height", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType}>Submit</Element>);

        const size = primaryHeight({ sizeType });
        verifySize(sizeType, size, "min-height");
      });
    });
  });
});

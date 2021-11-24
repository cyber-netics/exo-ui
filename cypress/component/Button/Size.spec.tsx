import React from "react";
import { mount } from "@cypress/react";
import Button, { ButtonProps } from "Components/Button";

import { ISizeTypes } from "Shared"; //types
import { primaryHeight, primarySpace, primaryFontSize } from "Shared";

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<ButtonProps> = (props) => (
  <Button className="btn-element" {...props}>
    Submit
  </Button>
);

describe("Sizing", () => {
  const verifySize = (sizeType: ISizeTypes, size: string, css: string) => {
    cy.get(".btn-element").should("have.css", css, size);
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

  describe("Spacing", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType}>Submit</Element>);

        const size = primarySpace({ sizeType });
        verifySize(sizeType, size, "padding");
      });
    });
  });

  describe("Font", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType}>Submit</Element>);

        const size = primaryFontSize({ sizeType });
        verifySize(sizeType, size, "font-size");
      });
    });
  });
});

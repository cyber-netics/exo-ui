import React from "react";
import { mount } from "@cypress/react";

import Button, { ButtonProps } from "Components/Button";
import { IColorTypes } from "Shared"; //types
import { primaryColors, primaryFontColors } from "Shared";

const colorList: IColorTypes[] = ["primary", "dark"];

const Element: React.FC<ButtonProps> = (props) => (
  <Button className="btn-element" {...props}>
    Submit
  </Button>
);

describe("Dynamic Colors", () => {
  const verifySize = (colorType: IColorTypes, color: string, css: string) => {
    cy.get(".btn-element").should("have.css", css, color);
    cy.log(`Color: ${colorType} - ${color}`);
  };

  describe("Background", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);

        const color = primaryColors({ colorType });
        verifySize(colorType, color, "background-color");
      });
    });
  });

  describe("Font", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);

        const color = primaryFontColors({ colorType });
        verifySize(colorType, color, "color");
      });
    });
  });
});

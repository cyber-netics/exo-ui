import React from "react";
import { mount } from "@cypress/react";
import Radio, { RadioProps } from "Components/Radio";

import { ISizeTypes, IColorTypes } from "Shared"; //types
import { primaryColors, secondaryHeight, primaryFontSize } from "Shared";

const colorList: IColorTypes[] = ["primary", "dark"];
const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<RadioProps> = (props) => (
  <Radio className="radio-element" {...props}>
    <>{props.children}</>
  </Radio>
);

const sizeTests = [
  { name: "Height", css: "height", mock: secondaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
];

const colorTests = [
  { name: "Background", css: "backgroundColor", mock: primaryColors },
  //   { name: "Font", css: "color", mock: primaryFontColors },
];

describe("Dynamic Sizes", () => {
  sizeTests.forEach((des) => {
    describe(des.name, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          mount(<Element size={sizeType}>Submit</Element>);
          const size = des.mock({ sizeType });

          cy.get(".radio-element").should("have.css", des.css, size);
          cy.log(`Size: ${sizeType} - ${size}`);
        });
      });
    });
  });
});

describe("Dynamic Colors", () => {
  colorTests.forEach((des) => {
    describe(des.name, () => {
      colorList.forEach((colorType) => {
        it(colorType, () => {
          mount(<Element color={colorType}>Submit</Element>);
          const color = des.mock({ colorType });

          cy.get(".radio-element")
            .click()
            .pseudoCss(des.css, "after")
            .parseColor()
            .should("equal", color);

          cy.log(`Color: ${colorType} - ${color}`);
        });
      });
    });
  });
});

describe("Label", () => {
  ["Checkbox", "Element"].forEach((name) => {
    it(`Text "${name}"`, () => {
      mount(<Element>{name}</Element>);
      cy.get(".radio-element").should("have.text", name);
    });
  });
});

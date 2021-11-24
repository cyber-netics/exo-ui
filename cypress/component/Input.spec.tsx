import React from "react";
import { mount } from "@cypress/react";
import Input, { InputProps } from "Components/Input";

import { IColorTypes, ISizeTypes } from "Shared"; // Types
import { primaryHeight, primarySpace, primaryFontSize } from "Shared";
import { primaryColors, primaryFontColors, secondaryColors } from "Shared";

const Element: React.FC<InputProps> = (props) => (
  <Input className="btn-element" {...props} />
);

const colorList: IColorTypes[] = ["primary", "dark"];
const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const sizeTests = [
  { name: "Height", css: "min-height", mock: primaryHeight },
  //   { name: "Spacing", css: "padding", mock: primarySpace, browser: "chrome" },
  //   { name: "Font", css: "font-size", mock: primaryFontSize },
];

const interactiveColorTest = [
  {
    name: "Hover",
    css: "border-color",
    mock: primaryColors,
    browser: "chrome",
  },
];

describe("Interactive", () => {
  interactiveColorTest.forEach((des) => {
    describe(des.name, { browser: des.browser }, () => {
      colorList.forEach((colorType) => {
        it(colorType, () => {
          mount(<Element color={colorType}>Submit</Element>);
          const color = des.mock({ colorType });

          cy.get(".btn-element")
            .click()
            .onHover()
            .pseudoCss(des.css)
            .parseColor()
            .should("equal", color);
        });
      });
    });
  });
});

describe("Dynamic Sizes", () => {
  sizeTests.forEach((des) => {
    describe(des.name, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          mount(<Element size={sizeType}>Submit</Element>);
          const size = des.mock({ sizeType });

          cy.get(".btn-element").should("have.css", des.css, size);
          cy.log(`Size: ${sizeType} - ${size}`);
        });
      });
    });
  });
});

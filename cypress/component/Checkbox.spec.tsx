import React from "react";
import { mount } from "@cypress/react";
import Checkbox, { CheckboxProps } from "Components/Checkbox";

import { ISizeTypes, IColorTypes } from "Shared"; // Types
import {
  secondaryHeight,
  primaryFontSize,
  primaryColors,
  // secondaryColors,
} from "Shared";

const Element: React.FC<CheckboxProps> = (props) => (
  <Checkbox className="checkbox-element" {...props}>
    {props.children}
  </Checkbox>
);

const sizeList: ISizeTypes[] = ["small", "medium", "large"];
const colorList: IColorTypes[] = ["primary", "dark"];

const sizeTests = [
  { name: "Height", css: "height", mock: secondaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
];

const colorTests = [
  { name: "Background", css: "background-color", mock: primaryColors },
  //   { name: "Font", css: "color", mock: primaryFontColors },
];

// const interactiveColorTest = [
//   {
//     name: "Hover",
//     css: "backgroundColor",
//     mock: secondaryColors,
//     browser: "chrome",
//     pseudo: "after",
//   },
// ];

// describe("Interactive", () => {
//   interactiveColorTest.forEach((des) => {
//     describe(des.name, { browser: des.browser }, () => {
//       colorList.forEach((colorType) => {
//         it(colorType, () => {
//           mount(<Element color={colorType}>Submit</Element>);
//           const color = des.mock({ colorType });

//           cy.get(".checkbox-element")
//             .click()
//             .onHover()
//             .pseudoCss(des.css)
//             .parseColor()
//             .should("equal", color);
//         });
//       });
//     });
//   });
// });

describe("Dynamic Sizes", () => {
  sizeTests.forEach((des) => {
    describe(des.name, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          mount(<Element size={sizeType}>Submit</Element>);
          const size = des.mock({ sizeType });

          cy.get(".checkbox-element").should("have.css", des.css, size);
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

          cy.get(".checkbox-element")
            .click({ force: true })
            .should("have.css", des.css, color);
          cy.log(`Color: ${colorType} - ${color}`);
        });
      });
    });
  });
});

describe("Child", () => {
  ["Checkbox", "Element"].forEach((name) => {
    it(`Text "${name}"`, () => {
      mount(<Element>{name}</Element>);
      cy.get(".checkbox-element").should("have.text", name);
    });
  });
});

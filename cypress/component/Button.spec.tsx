import React from "react";
import { mount } from "@cypress/react";
import Button, { ButtonProps } from "Components/Button";

import { IColorTypes, ISizeTypes } from "Shared"; // Types
import { primaryColors, primaryFontColors, secondaryColors } from "Shared";
import { primaryHeight, primarySpace, primaryFontSize } from "Shared";

const Element: React.FC<ButtonProps> = (props) => (
  <Button className="btn-element" {...props}>
    {props.children}
  </Button>
);

const colorList: IColorTypes[] = ["primary", "dark"];
const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const sizeTests = [
  { name: "Height", css: "min-height", mock: primaryHeight },
  { name: "Spacing", css: "padding", mock: primarySpace },
  { name: "Font", css: "font-size", mock: primaryFontSize },
];

const colorTests = [
  { name: "Background", css: "background-color", mock: primaryColors },
  { name: "Font", css: "color", mock: primaryFontColors },
];

const interactiveColorTest = [
  { name: "Hover", css: "backgroundColor", mock: secondaryColors },
  {
    name: "Wave Animation",
    pseudo: "after",
    css: "boxShadow",
    mock: secondaryColors,
  },
];

describe("Interactive", () => {
  interactiveColorTest.forEach((des) => {
    describe(des.name, () => {
      colorList.forEach((colorType) => {
        it(colorType, () => {
          mount(<Element color={colorType}>Submit</Element>);
          const color = secondaryColors({ colorType });

          cy.get("button.btn-element")
            .click()
            .onHover()
            .pseudoCss(des.css, des.pseudo)
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

describe("Dynamic Colors", () => {
  colorTests.forEach((des) => {
    describe(des.name, () => {
      colorList.forEach((colorType) => {
        it(colorType, () => {
          mount(<Element color={colorType}>Submit</Element>);
          const color = des.mock({ colorType });

          cy.get(".btn-element").should("have.css", des.css, color);
          cy.log(`Color: ${colorType} - ${color}`);
        });
      });
    });
  });
});

describe("Element", () => {
  describe("Child", () => {
    ["Submit", "Element"].forEach((name) => {
      it(`Text "${name}"`, () => {
        mount(<Element>{name}</Element>);
        cy.get(".btn-element").should("have.text", name);
      });
    });
  });

  describe("Click", () => {
    ["Once", "Twice"].forEach((clicked) => {
      it(clicked, () => {
        const onClick = cy.stub().as(`clicked-${clicked}`);
        mount(<Element onClick={onClick}>Submit</Element>);

        cy.get(".btn-element").timesToClick(clicked);
        cy.get(`@clicked-${clicked}`).should(`have.been.called${clicked}`);
      });
    });
  });

  describe("Loading", () => {
    [false, true].forEach((status) => {
      it(status ? "On" : "Off", () => {
        mount(<Element loading={status}>Submit</Element>);

        const elem = cy.get(".btn-element").hasChild("span");
        if (!status) return elem.should("equal", false);
        elem.should("have.class", "button-loading");
      });
    });
  });
});

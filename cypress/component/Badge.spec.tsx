import React from "react";
import { mount } from "@cypress/react";

import { ISizeTypes, IStatusColorTypes } from "Shared"; //Types
import {
  secondaryHeight,
  secondaryFontSize,
  primaryStatusColors,
} from "Shared";
import Badge, { BadgeProps } from "Components/Badge";
import { IShapeTypes } from "Components/Badge/styles";

const Element: React.FC<BadgeProps> = (props) => (
  <Badge className="badge-element" {...props} />
);

const sizeList: ISizeTypes[] = ["small", "medium", "large"];
const colorList: IStatusColorTypes[] = ["success", "error", "neutral"];
const shapeList: IShapeTypes[] = ["dot", "circle", "overflow"];

describe("Dynamic Sizes", () => {
  describe("Height", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        sizeList.forEach((sizeType) => {
          it(sizeType, () => {
            mount(<Element shape={shapeType} size={sizeType} />);
            const size = secondaryHeight({ sizeType });
            const elem = cy.get(".badge-element");

            elem.should("have.css", "height", size);
            elem.should("have.css", "width", size);
            cy.log(`Size: ${sizeType} - ${size}`);
          });
        });
      });
    });
  });

  describe("Font", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        sizeList.forEach((sizeType) => {
          it(sizeType, () => {
            mount(<Element shape={shapeType} size={sizeType} />);
            const size = secondaryFontSize({ sizeType });
            const elem = cy.get(".badge-element").children();

            elem.should("have.css", "font-size", size);
            cy.log(`Size: ${sizeType} - ${size}`);
          });
        });
      });
    });
  });
});

describe("Dynamic Colors", () => {
  describe("Background", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        colorList.forEach((colorType) => {
          it(colorType, () => {
            mount(<Element color={colorType} />);
            const color = primaryStatusColors({ colorType });

            cy.get(".badge-element")
              .children()
              .should("have.css", "background-color", color);

            cy.log(`Color: ${colorType} - ${color}`);
          });
        });
      });
    });
  });
});

describe("InnerText", () => {
  describe("Size", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        shapeList.forEach((shapeType) => {
          it(shapeType, () => {
            mount(<Element shape={shapeType} count={10} />);
            const elem = cy.get(".badge-element").children();

            shapeType !== "dot" && elem.should("have.text", 10);
            shapeType === "dot" && elem.should("not.have.text", 10);
          });
        });
      });
    });
  });
});

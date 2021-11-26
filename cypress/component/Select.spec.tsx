import React from "react";
import { mount } from "@cypress/react";

import { ISizeTypes } from "Shared"; // Types
import { primaryHeight, primaryFontSize } from "Shared"; //Size
import { primaryColors, primaryShadow } from "Shared"; //Color
import Select, { Option, SelectProps } from "Components/Select";

const optionList = [
  { key: "1", name: "Option One" },
  { key: "2", name: "Option Two" },
];

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<SelectProps> = (props) => (
  <Select className="select-element" {...props}>
    {optionList.map((option) => (
      <Option key={option.key} value={option.name}>
        {option.name}
      </Option>
    ))}
  </Select>
);

describe("Interactive", () => {
  describe("Hover", () => {
    beforeEach(() => {
      mount(<Element />);
      cy.get(".select-element").invoke("show").onHover();
    });

    sizeList.forEach((colorType) => {
      describe(colorType, () => {
        it("Border Color", () => {
          const color = primaryColors({ colorType: "primary" });
          cy.get(".select-element")
            .focus()
            .should("have.css", "border-color", color);
        });

        it("Border Shadow", () => {
          const shadowColor = primaryShadow({ colorType: "primary" });
          cy.get(".select-element")
            .focus()
            .pseudoCss("box-shadow")
            .parseColor("rgba")
            .should("equal", shadowColor);
        });
      });
    });
  });
});

describe("Dynamic Size", () => {
  describe("Height", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType} />);
        const size = primaryHeight({ sizeType });
        cy.get(".select-element").should("have.css", "min-height", size);
      });
    });
  });

  describe("Font", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType} />);
        const size = primaryFontSize({ sizeType });

        cy.get(".select-element")
          .children()
          .should("have.css", "font-size", size);
      });
    });
  });
});

describe("Option", () => {
  it("Value", () => {
    optionList.forEach((option) => {
      mount(<Element />);

      cy.get(".select-element")
        .select(option.name)
        .invoke("select")
        .should("have.value", option.name);
    });
  });
});

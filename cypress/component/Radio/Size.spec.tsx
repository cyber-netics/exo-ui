import React from "react";
import { mount } from "@cypress/react";
import Radio, { RadioProps } from "Components/Radio";

import { ISizeTypes } from "Shared"; //types
import { secondaryHeight } from "Shared";

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<RadioProps> = (props) => (
  <Radio className="radio-element" {...props}>
    Checkbox
  </Radio>
);

describe("Sizing", () => {
  const approxSize = (css: string, size: string) => {
    const parse = (str: string) => {
      return Number(str.split("px")[0]);
    };

    cy.get(".radio-element")
      .should("have.css", css)
      .should((style) => {
        expect(parse(style.toString())).to.approximately(0.2, parse(size));
      });
  };

  sizeList.forEach((sizeType) => {
    it(sizeType, () => {
      mount(<Element size={sizeType}>Checkbox</Element>);

      const size = secondaryHeight({ sizeType });
      approxSize("width", size);
    });
  });
});

import React from "react";
import { mount } from "@cypress/react";
import Checkbox, { CheckboxProps } from "Components/Checkbox";

import { ISizeTypes } from "Shared"; //types

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<CheckboxProps> = (props) => (
  <Checkbox className="checkbox-element" {...props} />
);

describe("Element", () => {
  const verifyChecked = (checked: boolean) => {
    const isChecked = `${!checked ? "not." : ""}be.checked`;
    cy.get("#checkbox-inner").should(isChecked);
  };

  const clickCheck = (check: boolean) => {
    const elem = cy.get("#checkbox-inner");
    if (check) return elem.check({ force: true });
    else return elem.uncheck({ force: true });
  };

  describe("UnCheck", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType} />);

        clickCheck(false);
        verifyChecked(false);
      });
    });
  });

  describe("Check", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType} />);

        clickCheck(true);
        verifyChecked(true);
      });
    });
  });
});

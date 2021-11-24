import React from "react";
import { mount } from "@cypress/react";
import Checkbox, { CheckboxProps } from "Components/Checkbox";

import { IColorTypes } from "Shared"; //types
import { primaryColors } from "Shared";

const colorList: IColorTypes[] = ["primary", "dark"];

const Element: React.FC<CheckboxProps> = (props) => (
  <Checkbox className="checkbox-element" {...props}>
    Checkbox
  </Checkbox>
);

describe("Color", () => {
  const verifyColor = (colorType: IColorTypes) => {
    const color = primaryColors({ colorType });

    cy.get(".checkbox-element").should(($div) => {
      cy.log("----", $div[0]);

      const style = window.getComputedStyle($div[0]);
      expect(style.backgroundColor).to.equal(color);
    });
  };

  const check = (checked: boolean) => {
    const checkbox = cy.get("#checkbox-inner");
    if (checked) checkbox.check({ force: true });
    else checkbox.uncheck({ force: true });
  };

  describe("Checked Background", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType} />);

        check(true);
        verifyColor(colorType);
      });
    });
  });
});

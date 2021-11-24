import React from "react";
import { mount } from "@cypress/react";
import Radio, { RadioProps } from "Components/Radio";

import { IColorTypes } from "Shared"; //types
import { primaryColors } from "Shared";
import Color from "color";

const colorList: IColorTypes[] = ["primary", "dark"];

const Element: React.FC<RadioProps> = (props) => (
  <Radio className="radio-element" {...props}>
    Checkbox
  </Radio>
);

const convertToRgb = (rgba?: string) => {
  const color = Color(rgba);
  const arr = color.rgb().array();
  arr.pop();
  return Color(arr).rgb().toString();
};

describe("Color", () => {
  const verifyColor = (colorType: IColorTypes) => {
    const color = primaryColors({ colorType });

    cy.get(".radio-element").then(($els) => {
      const win = $els[0].ownerDocument.defaultView;
      const before: any = win?.getComputedStyle($els[0], ":after");
      const style = convertToRgb(before["backgroundColor"]);
      cy.wrap(style).should("equal", color);
    });
  };

  const check = (checked: boolean) => {
    const checkbox = cy.get("#radio-inner");
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

import React from "react";
import { mount } from "@cypress/react";
import { Input, InputEmail, InputNumber, InputProps } from "Components/Input";

import { IColorTypes, ISizeTypes } from "Shared"; // Types
import { primaryColors, primaryShadow, primaryHeight } from "Shared";
import { colors } from "Shared";

type InputTypes = "input" | "email" | "number";
interface InputCustomProps extends InputProps {
  inputType?: InputTypes;
}

const Element: React.FC<InputCustomProps> = (props) => {
  if (props.inputType === "number")
    return <InputNumber className="input-element" {...props} />;

  if (props.inputType === "email")
    return <InputEmail className="input-element" {...props} />;
  else return <Input className="input-element" {...props} />;
};

const colorList: IColorTypes[] = ["primary", "dark"];
const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const sizeTests = [{ name: "Height", css: "min-height", mock: primaryHeight }];
const inputTypes: InputTypes[] = ["input", "email", "number"];

describe("Input Text", () => {
  const verifyErrorBorder = (inputText: string, hasErr: boolean) => {
    cy.get(".input-element")
      .type(inputText)
      .blur()
      .invoke("val")
      .then((text) => {
        expect(text).equal(inputText);
      });

    cy.get(".input-element").should(
      `${!hasErr ? "not." : ""}have.css`,
      "border-color",
      colors.error
    );
  };

  describe("Email", () => {
    it("InValid Email", () => {
      mount(<Element inputType="email">Submit</Element>);
      verifyErrorBorder("testing email input", true);
    });

    it("Valid Email", () => {
      mount(<Element inputType="email">Submit</Element>);
      verifyErrorBorder("testing@gmail.com", false);
    });
  });
});

inputTypes.forEach((inputType) => {
  describe("Dynamic Sizes", () => {
    describe(inputType, () => {
      sizeTests.forEach((des) => {
        describe(des.name, () => {
          sizeList.forEach((sizeType) => {
            it(sizeType, () => {
              mount(
                <Element size={sizeType} inputType={inputType}>
                  Submit
                </Element>
              );
              const size = des.mock({ sizeType });

              cy.get(".input-element").should("have.css", des.css, size);
              cy.log(`Size: ${sizeType} - ${size}`);
            });
          });
        });
      });
    });

    describe("Focus", () => {
      describe(inputType, () => {
        colorList.forEach((colorType) => {
          describe(colorType, () => {
            beforeEach(() => {
              mount(
                <Element color={colorType} inputType={inputType}>
                  Submit
                </Element>
              );
              cy.get("input.input-element").invoke("show").onHover();
            });

            it("border", () => {
              const borderColor = primaryColors({ colorType });
              cy.get(".input-element")
                .focus()
                .should("have.css", "border-color", borderColor);
            });

            it("shadow", () => {
              const shadowColor = primaryShadow({ colorType });
              cy.get("input.input-element")
                .focus()
                .pseudoCss("box-shadow")
                .parseColor("rgba")
                .should("equal", shadowColor);
            });
          });
        });
      });
    });

    describe("Error", () => {
      describe(inputType, () => {
        beforeEach(() => {
          mount(
            <Element error={true} inputType={inputType}>
              Submit
            </Element>
          );
          cy.get("input.input-element").invoke("show").onHover();
        });

        it("border", () => {
          cy.get(".input-element")
            .focus()
            .should("have.css", "border-color", colors.error);
        });

        it("shadow", () => {
          cy.get("input.input-element")
            .focus()
            .pseudoCss("box-shadow")
            .parseColor("rgba")
            .should("equal", colors.error1);
        });
      });
    });

    describe("Hover", () => {
      describe(inputType, () => {
        colorList.forEach((colorType) => {
          it(colorType, () => {
            mount(
              <Element color={colorType} inputType={inputType}>
                Submit
              </Element>
            );
            const color = primaryColors({ colorType });

            cy.get(".input-element")
              .click()
              .onHover()
              .pseudoCss("border-color")
              .parseColor()
              .should("equal", color);
          });
        });
      });
    });
  });
});

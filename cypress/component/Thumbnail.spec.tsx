import React from "react";
import { mount } from "@cypress/react";
import { ISizeTypes, primaryHeight } from "Shared";
import Thumbnail from "Components/Thumbnail";

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const Element: React.FC<{ size?: ISizeTypes }> = (props) => (
  <Thumbnail
    size={props.size}
    className="thumb-element"
    alt={"imageName"}
    src={
      "https://cdn.shopify.com/s/files/1/0009/3080/7852/products/16_2_small.jpg?v=1629541016"
    }
  />
);

describe("Dynamic Size", () => {
  sizeList.forEach((sizeType) => {
    it(sizeType, () => {
      mount(<Element size={sizeType} />);
      const size = primaryHeight({ sizeType });

      cy.get(".thumb-element").should("have.css", "height", size);
      cy.get(".thumb-element").should("have.css", "width", size);
    });
  });
});

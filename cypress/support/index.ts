/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
import "regenerator-runtime/runtime";

import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      hasChild(value: string): Chainable<Element>;
      timesToClick(value: string): Chainable<Element>;
      pseudoCss(style: string, pseudoStyle?: string): Chainable<Element>;
      parseColor(): Chainable<Element>;
      onHover(): Chainable<Element>;
    }
  }
}

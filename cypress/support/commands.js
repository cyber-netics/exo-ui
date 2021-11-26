import { extractRgb, convertRgb } from "./util";
import { getElementPositionXY } from "./util/coords";

function hasChild(elem, child) {
  const getChild = elem.find(child);
  if (!!getChild.length) return getChild;
  return false;
}

function clickNum(elem, clickNum) {
  if (clickNum === "Once") elem.click();
  if (clickNum === "Twice") elem.click().click();
  return cy.wrap(elem);
}

function pseudoCss(elem, style, pseudoElem) {
  const win = elem[0].ownerDocument.defaultView;
  const before = win?.getComputedStyle(elem[0], `:${pseudoElem || ""}`);
  return before[style];
}

function parseColor(color, type) {
  const rgbColor = extractRgb(color);
  if (type === "rgba") return rgbColor;
  return convertRgb(rgbColor);
}

async function fireCdpCommand(command, params) {
  return Cypress.automation("remote:debugger:protocol", {
    command,
    params,
  }).catch((e) => {
    throw new Error(
      `Failed request to chrome devtools protocol. This can happen if cypress lost connection to the browser or the command itself is not valid. Original cypress error: ${e}`
    );
  });
}

async function onHover(elem) {
  elem[0].style.transition = "none";

  const { x, y } = getElementPositionXY(elem[0]);

  try {
    await fireCdpCommand("Input.dispatchMouseEvent", {
      x,
      y,
      type: "mouseMoved",
      button: "none",
      pointerType: "mouse",
    });
  } catch (err) {
    throw err;
  }

  return elem;
}

Cypress.Commands.add("hasChild", { prevSubject: true }, hasChild);
Cypress.Commands.add("pseudoCss", { prevSubject: true }, pseudoCss);
Cypress.Commands.add("timesToClick", { prevSubject: true }, clickNum);
Cypress.Commands.add("parseColor", { prevSubject: true }, parseColor);
Cypress.Commands.add("onHover", { prevSubject: true }, onHover);

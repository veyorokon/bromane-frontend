/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import configure from "theme/config";
import { compose } from "styled-system";

/*
     Fields
 */

const position = configure("position", "position");

const overflow = configure("overflow", ["overflow"]);

const top = configure("top", ["top"], "space");
const bottom = configure("bottom", ["bottom"], "space");
const left = configure("left", ["left"], "space");
const right = configure("right", ["right"], "space");

const width = configure("width", ["w", "width"], "space");
const height = configure("height", ["h", "height"], "space");
const minWidth = configure("minWidth", ["minWidth"], "space");
const minHeight = configure("minHeight", ["minHeight"], "space");
const maxWidth = configure("maxWidth", ["maxWidth"], "space");
const maxHeight = configure("maxHeight", ["maxHeight"], "space");

const background = configure("background", ["bg", "background"], "colors");
const color = configure("color", "color", "colors");

const fontWeight = configure("fontWeight", "fw", "fontWeights");
const fontSize = configure("fontSize", "fs", "fontSizes");
const typography = compose(
  fontWeight,
  fontSize
);

const margin = configure("margin", ["margin", "m"], "space");
const marginTop = configure("marginTop", ["marginTop", "mt"], "space");
const marginBottom = configure("marginBottom", ["marginBottom", "mb"], "space");
const marginLeft = configure("marginLeft", ["marginLeft", "ml"], "space");
const marginRight = configure("marginRight", ["marginRight", "mr"], "space");
const marginFields = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
);

const padding = configure("padding", ["padding", "p"], "space");
const paddingTop = configure("paddingTop", ["paddingTop", "pt"], "space");
const paddingBottom = configure(
  "paddingBottom",
  ["paddingBottom", "pb"],
  "space"
);
const paddingLeft = configure("paddingLeft", ["paddingLeft", "pl"], "space");
const paddingRight = configure("paddingRight", ["paddingRight", "pr"], "space");
const paddingFields = compose(
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
);

const generics = compose(
  typography,
  marginFields,
  paddingFields,
  background,
  color,
  width,
  height,
  overflow,
  position,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  top,
  bottom,
  left,
  right
);

const borderColor = configure("borderColor", ["borderColor"], "colors");

const display = configure("display", "display");

export {
  top,
  bottom,
  left,
  right,
  overflow,
  generics,
  background,
  color,
  typography,
  fontWeight,
  fontSize,
  marginFields,
  paddingFields,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  width,
  height,
  borderColor,
  display,
  position
};

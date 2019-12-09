/*
    Author: Vahid Eyorokon

    Utility functions and commonly used fields
*/

/*
    Imports
*/

import styled from "styled-components";
import { generics } from "theme";

export function themedComponent(
  ComponentToLoad,
  fields = [],
  withGenerics = true
) {
  if (withGenerics)
    return styled(ComponentToLoad)`
      ${fields}
      ${generics}
    `;
  else
    return styled(ComponentToLoad)`
      ${fields}
    `;
}

function formatValues(values) {
  let fmt;
  fmt = values.replace(/x-/g, "x -");
  fmt = fmt.replace(/m-/g, "m -");
  fmt = fmt.replace(/%-/g, "% -");
  fmt = fmt.replace(/l-/g, "l -");
  fmt = fmt.split(">").join(" ");

  if (fmt[0] === "-") {
    fmt = fmt.replace("-", "initial ");
  }
  fmt = fmt.split(" ");

  fmt = fmt.filter(elem => elem !== "");
  return fmt;
}

export function responsive(values) {
  let fmt = formatValues(values);
  let output = [];
  let lastElem = fmt[0];

  fmt.forEach(function(value) {
    if (value.includes("-")) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === "-") {
          output.push(lastElem);
        }
      }
    } else {
      if (+value) {
        output.push(+value);
        lastElem = +value;
      } else {
        output.push(value);
        lastElem = value;
      }
    }
  });
  return output;
}

let lastId = 0;
export function newID(prefix = "id") {
  lastId++;
  return `${prefix}${lastId}`;
}

function _recUpdateState(state, selector, newval) {
  if (selector.length > 1) {
    let field = selector.shift();
    let subObject = { ..._recUpdateState(state[field], selector, newval) };
    return { ...state, [field]: subObject };
  } else {
    let updatedState = {};
    updatedState[selector.shift()] = newval;
    return { ...state, ...updatedState };
  }
}

export function updateState(state, selector, newval, autoAssign = true) {
  let newState = _recUpdateState(state, selector, newval);
  if (autoAssign) return Object.assign(state, newState);
  return _recUpdateState(state, selector, newval);
}

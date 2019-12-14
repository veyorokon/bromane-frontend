function _recUpdateState(state, selector, newval) {
  if (selector.length > 1) {
    let field = selector.shift();
    let subObject = {};
    try {
      //Select the subobject if it exists
      subObject = {..._recUpdateState(state[field], selector, newval)};
    } catch {
      //Create the subobject if it doesn't exist
      subObject = {
        ..._recUpdateState(state, selector, newval)
      };
    }
    return {...state, [field]: subObject};
  } else {
    let updatedState = {};
    updatedState[selector.shift()] = newval;
    return {...state, ...updatedState};
  }
}

export default function updateState(
  state,
  selector,
  newval,
  autoAssign = true
) {
  let newState = _recUpdateState(state, selector, newval);
  if (autoAssign) return Object.assign(state, newState);
  return newState;
}

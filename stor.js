import { legacy_createStore } from 'redux';

function reduser(state = 0, action) {  // مقدار اولیه برابر با 0
  switch (action.type) {
      case "P":
          return state + 1;  // افزایش مقدار
      default:
          return state;  // برگشت همان مقدار اولیه
  }
}

export const stor = legacy_createStore(reduser)

console.log("salam")
console.log("salam salam");

console.log("salam salam salam");
console.log("salam salam salam salam");

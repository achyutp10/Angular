import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
   initialState,
  on(increment, (state, action) => state + action.value)
);

// export function counterReducer(state = initialState) {
//   return state;
// }

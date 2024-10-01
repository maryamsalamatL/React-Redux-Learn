import { BUY_CAKE } from "./cakeTypes";

// action creator 
export function buyCake(payload) {
  return {
    type: BUY_CAKE,
    payload,
  };
}

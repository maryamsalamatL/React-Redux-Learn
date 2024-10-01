import { BUY_MILK } from "./milkTypes";

export function buyMilk(payload) {
  return { type: BUY_MILK, payload };
}

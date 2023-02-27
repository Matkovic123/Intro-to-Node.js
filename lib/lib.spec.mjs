import { add } from "./myLib.mjs";
import assert from "assert";

console.log("add() should add two numbers");

try {
  assert.strictEqual(add(3, 4), 7);
  console.log("SCCESS");
} catch (e) {
  console.log("FAIL");
  console.error(e);
}

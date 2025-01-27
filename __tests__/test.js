import keys from "./Keys.js"
import TestSum from "./testcases/TestSum.js"
import TestMinus from "./testcases/TestMinus.js"
import TestDivide from "./testcases/TestDivide.js"
import TestMultiply from "./testcases/TestMultiply.js"


async function runTest() {
  //TestSum()
  //TestMinus()
  TestMultiply()
  //TestDivide()
}

runTest().catch(console.error);

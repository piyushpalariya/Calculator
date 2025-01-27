import winston from "winston";
winston.configure({
  transports: [new winston.transports.File({ filename: "./__tests__/logs/Multiply_logs.txt" })],
});

import keys from "../Keys.js"

async function TestMultiply() {
    winston.info("test cases for sum");
  
    await keys.number1.click();
    winston.info("number 1 clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number2.click();
    winston.info("number 2 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number3.click();
    winston.info("number 3 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number4.click();
    winston.info("number 4 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number5.click();
    winston.info("number 5 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number6.click();
    winston.info("number 6 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number7.click();
    winston.info("number 7 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number8.click();
    winston.info("number 8 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    await keys.multiply.click();
    winston.info("multiply clicked");
  
    await keys.number9.click();
    winston.info("number 9 clicked");
  
    await keys.equal.click();
    winston.info("equal clicked");
  
    const data = await keys.result.getText();
  
    winston.info("result is " + data);
  }

  export default TestMultiply
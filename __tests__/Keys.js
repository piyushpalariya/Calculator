import { remote } from "webdriverio";

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
  "appium:appPackage": "com.calculator",
  "appium:appActivity": "com.calculator.MainActivity",
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};

const driver = await remote(wdOpts);

const number1 = await driver.$('//android.view.ViewGroup[@content-desc="1"]');
const number2 = await driver.$('//android.view.ViewGroup[@content-desc="2"]');
const number3 = await driver.$('//android.view.ViewGroup[@content-desc="3"]');
const number4 = await driver.$('//android.view.ViewGroup[@content-desc="4"]');
const number5 = await driver.$('//android.view.ViewGroup[@content-desc="5"]');
const number6 = await driver.$('//android.view.ViewGroup[@content-desc="6"]');
const number7 = await driver.$('//android.view.ViewGroup[@content-desc="7"]');
const number8 = await driver.$('//android.view.ViewGroup[@content-desc="8"]');
const number9 = await driver.$('//android.view.ViewGroup[@content-desc="9"]');
const number0 = await driver.$('//android.view.ViewGroup[@content-desc="0"]');
const equal = await driver.$('//android.view.ViewGroup[@content-desc="="]');
const divide = await driver.$('//android.view.ViewGroup[@content-desc="/"]');
const plus = await driver.$('//android.view.ViewGroup[@content-desc="+"]');
const minus = await driver.$('//android.view.ViewGroup[@content-desc="-"]');
const multiply = await driver.$('//android.view.ViewGroup[@content-desc="*"]');

const result = await driver.$(
  '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.TextView'
);

const keys = {
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
  number0,
  equal,
  divide,
  plus,
  minus,
  multiply,
  result,
};

export default keys;

const { Given, When, Then } = require('cucumber');
const wdio = require('webdriverio');
const assert = require('assert');

let driver;

Given('I am on the Flutter web application', async () => {
  // Set up the Appium driver options
  const opts = {
    port: 4723,
    capabilities: {
      platformName: 'Flutter',
      deviceName: 'flutter-driver',
      //app: 'https://github.com/your-app-url',
      app: 'https://stage.eas-history.wdprapps.disney.com/#/history',
    },
  };

  // Create the Appium driver
  driver = await wdio.remote(opts);

  // Wait for the Flutter web application to load
  await driver.execute('flutter:waitFor');
});

When('I click the {string} button', async (buttonId) => {
  // Find the button in the application by its ID
  const button = await driver.$(`~${buttonId}`);

  // Click the button
  await button.click();
});

When('I press the Enter key', async () => {
  // Press the Enter key
  await driver.execute('flutter:sendKeyEvent', { keyCode: 66 });
});

Then('I should see the result', async () => {
  // Take a screenshot
  const screenshot = await driver.takeScreenshot();

  // Close the Appium driver
  await driver.deleteSession();
});

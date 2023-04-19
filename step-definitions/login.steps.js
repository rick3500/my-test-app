const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');


Given(/^I am on the login page$/, async () => {
  //await browser.pause(50000);
  await browser.url('/');
});

When(/^I enter "([^"]*)" as the email$/, async (email) => {
  const input = await $('//*[@name="email"]');

  await input.setValue(email);
});

When(/^I enter "([^"]*)" as the password$/, async (password) => {
  const input = await $('//*[@name="password"]');
  await input.setValue(password);
});

When(/^I click the login button$/, async () => {
  const button = await $('//*[@type="submit"]');
  await button.click();
});

Then(/^I should be on the dashboard page$/, async () => {
  const url = await browser.getUrl();
  expect(url).to.equal('http://localhost:3000/login');
});

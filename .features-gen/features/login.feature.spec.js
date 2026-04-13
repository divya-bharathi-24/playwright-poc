// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test.describe('Login with different users', () => {

    test('Example #1', { tag: ['@smoke', '@login'] }, async ({ Given, When, Then, page }) => { 
      await Given('I navigate to the login page', null, { page }); 
      await When('I login with username "standard_user" and password "secret_sauce"', null, { page }); 
      await Then('I should see the inventory page', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":12,"tags":["@smoke","@login"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I login with username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the inventory page","stepMatchArguments":[]}]},
]; // bdd-data-end
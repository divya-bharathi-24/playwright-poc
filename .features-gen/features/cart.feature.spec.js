// Generated from: features\cart.feature
import { test } from "../../fixtures/authFixture.ts";

test.describe('Cart', () => {

  test('Add product', async ({ Given, When, Then, And, loggedInPage }) => { 
    await Given('I am logged in', null, { loggedInPage }); 
    await When('I add a product to cart', null, { loggedInPage }); 
    await Then('I should see it in cart', null, { loggedInPage }); 
    await And('I should verify the thank you message', null, { loggedInPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I add a product to cart","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see it in cart","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And I should verify the thank you message","stepMatchArguments":[]}]},
]; // bdd-data-end
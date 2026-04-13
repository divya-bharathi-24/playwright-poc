import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/authFixture';
    
const { Given } = createBdd(test);

Given('I am logged in', async ({ loggedInPage }) => {
  // Already logged in via fixture
});
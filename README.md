# Playwright TypeScript Automation POC

## Overview

End-to-end test automation framework for [SauceDemo](https://www.saucedemo.com/) built with Playwright and TypeScript using the Page Object Model pattern.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv

## Project Structure

```
tests/
  login.spec.ts        → Data-driven login tests (valid & invalid)
  cart.spec.ts         → Cart functionality via header component
  example.spec.ts      → API testing with Playwright request
pages/
  LoginPage.ts         → Login page object
  HomePage.ts          → Home page object
  CartPage.ts          → Cart page object
  components/
    header.ts          → Reusable header component (cart, add to cart)
fixtures/
  testData.ts          → Static test data (credentials, product name)
  user.json            → User credentials for data-driven tests
.env                   → Environment variables (BASE_URL)
.github/workflows/     → CI pipeline (GitHub Actions)
```

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run in headed mode
npx playwright test --headed

# Run in UI mode
npx playwright test --ui
```

## Reports

```bash
npx playwright show-report
```

## Configuration

- **Base URL**: Loaded from `.env` via dotenv
- **Browser**: Chrome (headless)
- **Retries**: 1
- **Screenshots**: Captured on failure
- **Video**: Retained on failure
- **Trace**: Captured on first retry

## CI/CD

GitHub Actions workflow runs on push/PR to `main`. It installs dependencies, runs all tests, and uploads the HTML report as an artifact.


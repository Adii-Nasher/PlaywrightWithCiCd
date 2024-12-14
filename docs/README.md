# Playwright Test Framework Instructions

## Prerequisites
1. Install [Node.js](https://nodejs.org/) (version 16 or higher).
2. Install a Git client to clone the repository.
3. Ensure you have an internet connection to pull dependencies and run tests.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-repo>/sauce-labs-tests.git
   cd sauce-labs-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure Playwright dependencies are installed:
   ```bash
   npx playwright install
   ```

## Running Tests Locally
To execute all tests:
```bash
npx playwright test
```

To run a specific test suite, for example, the login suite:
```bash
npx playwright test tests/login.spec.ts
```

To view the HTML report of a previous test run:
```bash
npx playwright show-report
```

## CI/CD Pipeline
This repository is configured to use GitHub Actions for continuous integration and daily test execution.

### Pipeline Configuration
1. On every push to the `main` branch, the pipeline will automatically:
   - Install dependencies.
   - Run Playwright tests.
   - Generate reports for failed tests.

2. The pipeline is scheduled to run daily at 2:00 AM UTC. This can be adjusted in the `ci_cd_github_pipeline.yml` file.

### Viewing CI/CD Reports
After a pipeline run:
1. Access the Playwright test report under the `playwright-report/` directory (available as an artifact in GitHub Actions).

## Customisation
- To add new test cases, create new `.spec.ts` files in the `tests/` folder.
- Update the `playwright.config.ts` file for global settings like `baseURL` or `locale`.

## Issues
If you encounter any issues, please report them via the GitHub Issues tab of this repository.

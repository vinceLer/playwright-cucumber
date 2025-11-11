<div align="center">
    <h1>
        🥒 playwright-cucumber
    </h1>
</div>

# ⚙️ Dependencies

- @playwright/test: 1.56.1
- @types/node: 24.10.0
- @cucumber/cucumber: 12.2.0
- @cucumber/html-formatter: 22.0.0
- ts-node: 10.9.2


# 🛠️ Prerequisites 

Before getting started, make sure you have **Node.js** installed along with one of the following package managers:

- [pnpm](https://pnpm.io/)  
- [npm](https://www.npmjs.com/)

<br>

# ✨ Getting Started

## 📋 Clone the repository 

```bash
git clone https://github.com/vinceler/playwright-cucumber.git
cd playwright-cucumber
```

## 📦 Install dependencies 

Using pnpm:

```bash 
pnpm install
```

Or using npm:

```bash 
npm install
```

## 🚀 Run tests (using Cucumber)

Using pnpm:

```bash 
pnpm cucumber-js --require-module ts-node/register
```

Or using npm:

```bash 
npx cucumber-js --require-module ts-node/register
```


## ⚡ CLI Shortcuts

| Task | Script | Actual Command | Notes |
|:----------------------------|:-----------------|:-------------------------------------|:-------------------------------------------|
| **Run tests with Playwright** 🎭 | `pnpm test` | `pnpm exec playwright test` | Runs all tests using Playwright |
| **Run tests in debug mode** 🎭 | `pnpm debug` | `pnpm exec playwright test --debug` | Launches tests in Playwright debug mode |
| **Open test report** 🎭 | `pnpm report` | `pnpm exec playwright show-report` | Opens the HTML report, accessible at [http://localhost:9323](http://localhost:9323) |
| **Run tests with Cucumber** 🥒 | `pnpm test:cucumber` | `cucumber-js --require-module ts-node/register` | Runs all tests using Cucumber |
| **Run failed tests** 🥒 | `test:cucumber:rerun` | `pnpm exec playwright test` | Runs all last failed tests |

<br>

# 🧩 From Scratch Setup  

## ⚙️ 1. Install Playwright 

```bash 
pnpm exec playwright create 
```

👉 Follow the instructions in the terminal.

## 🥒 2. Install Cucumber 

```bash 
pnpm add -D @cucumber/cucumber 
```

## 3. 🧠 Install ts-node 

```bash 
pnpm add -D ts-node 
```

## 4. 🧾 Configure Cucumber 

Create a `cucumber.json` and `tsconfig.json` files at the root of the project :

__`cucumber.json`__ : 

```json
{
    "default": {
        "paths": [ "features/" ],
        "require": [ "steps/*.ts" ],
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "format": [ 
            [ "html", "cucumber-report.html" ],
            "summary",
            "progress-bar",
            "json:./cucumber-report.json",
            "rerun:reports/rerun.txt"
        ]
    }
}

```

__🔍 Explanation__ :

- 📂 `paths`: defines where the feature files are located (e.g., `tests/features/`).
- 🧩 `require`: specifies the location of the step definition files (e.g., `tests/features/step-definitions/*.ts`).
- ⚡ `"snippetInterface": "async-await"` — ensures generated step definitions use the `async/await` syntax, fully compatible with Playwright’s asynchronous actions.

__`tsconfig.json`__ : 

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true
  }
}
```

## 🧪 5. Implement test with Cucumber files  

Create the following folders :

- 📁 `features/`: contains `.feature` files (Gherkin scenarios).
- 📁 `steps/`: contains step definition files (`.ts`).

__Example :__

```ts
// features/step-definitions/example.steps.ts

import { Given, When, Then } from '@cucumber/cucumber';

// Step definitions... 
```

__Example scenario file :__

```yaml
# features/example.feature
Feature: Example feature
  Scenario: Simple test
    Given ...
    When ...
    Then ...
```

## 🚀 6. Run Tests

Use the `--require-module ts-node/register` option so Cucumber can read the `cucumber.json` configuration:

```bash 
pnpm cucumber-js --require-module ts-node/register
```

__✅ Result example (in terminal):__

```scss
... 

2 scenarios (2 passed)
7 steps (7 passed)
0m01.558s (executing steps: 0m01.543s)
```

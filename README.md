<div align="center">
    <h1>
        🥒 playwright-cucumber
    </h1>
</div>

# ⚙️ Dependencies

- @playwright/test: 1.56.1
- @types/node: 24.10.0
- @cucumber/cucumber: 12.2.0
- @cucumber/html-formatter": 22.0.0
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
| **Run tests** 🎭 | `pnpm test` | `pnpm exec playwright test` | Runs all tests using Playwright |
| **Run tests in debug mode** 🎭 | `pnpm debug` | `pnpm exec playwright test --debug` | Launches tests in Playwright debug mode |
| **Open test report** 🎭 | `pnpm report` | `pnpm exec playwright show-report` | Opens the HTML report, accessible at [http://localhost:9323](http://localhost:9323) |
| **Run tests with Cucumber** 🥒 | `pnpm test:cucumber` | `cucumber-js --require-module ts-node/register` | Runs all tests using Cucumber |
| **Run failed tests** 🥒 | `test:cucumber:rerun` | `pnpm exec playwright test` | Runs all last failed tests |


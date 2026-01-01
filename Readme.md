# Playwright Automation Framework – E-commerce Workflow

## Overview
This project demonstrates hands-on automation practice using Playwright with TypeScript for an e-commerce workflow. It covers end-to-end positive flows including signup, login, add to cart, place order, and logout.

## Tech Stack
**Automation Tool:** Playwright with TypeScript
**Test Design:** Page Object Model (POM), Data-driven testing using JSON
**CI/CD / Version Control:** GitHub, Jenkins, Azure DevOps (basic scripts)
**API Testing:** Postman (for API validations)
**IDE:** VS Code

## Features
• End-to-end workflow automation of an e-commerce site
• Reusable Page Object Model structure
• Data-driven testing using JSON
• Screenshots and traces for each test run
• Viewport testing for responsive validation
• HTML reports for easy result review

## Test Scenarios
• Signup with valid data
• Login with multiple users using JSON test data
• Add products to cart
• Place order / checkout
• Logout

## Project Structure
project-root
tests – Test scripts
pages – Page Object Model classes
data – JSON test data
helpers – Reusable helper functions
playwright.config.ts
package.json
README.md
.gitignore

## How to Run
• Clone the repository using your GitHub URL
• Install dependencies using npm install
• Install Playwright browsers using npx playwright install
• Run tests using npx playwright test
• View the HTML report using npx playwright show-report
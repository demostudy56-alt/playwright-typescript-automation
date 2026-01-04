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
- End-to-end workflow automation of an e-commerce site  
- Reusable Page Object Model structure  
- Data-driven testing using JSON  
- Screenshots and traces for each test run  
- Viewport testing for responsive validation  
- HTML reports for easy result review  

## Test Scenarios
## UI Scenarios
- Signup with valid data  
- Login with multiple users using JSON test data  
- Add products to cart  
- Place order / checkout  
- Logout

## API scenarios 
| API Endpoint       | Method | Type | Assertions Covered                   | Status |
|-------------------|--------|------|-------------------------------------|--------|
| /api/login         | POST   | API  | status code, responseCode, token    | ✅ Done |
| /api/searchProduct | POST   | API  | status code, products array, price  | ✅ Done |


## Project Structure
project-root
├── tests
├── pages
├── data
├── helpers
├── playwright.config.ts
├── package.json
├── README.md
└── .gitignore

## How to Run
1. Clone the repository  
2. Run `npm install`  
3. Run `npx playwright install`  
4. Execute tests using `npx playwright test`  
5. View report using `npx playwright show-report`
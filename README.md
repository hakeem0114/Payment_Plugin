# Payment Processor Project

This project implements a full responsive ysimplified payment processing application using React, with a plugin system for easy addition of new payment methods.

## Table of Contents
1. [Overview](#overview)
2. [OOP Principles and Design Patterns](#oop-principles-and-design-patterns)
3. [JavaScript and TypeScript Considerations](#javascript-and-typescript-considerations)
4. [Tools & Libraries](#tools--libraries)
5. [Setup and Run Instructions](#setup-and-run-instructions)
6. [Adding a New Mock Service](#adding-a-new-mock-service)
7. [Reasons Behind Design Choices](#reasons-behind-design-choices)
8. [Lessons Learned](#lessons-learned)
9. [Future Improvements](#future-improvements)
10. [Deployment](#deployment)

## Overview

The architecture of the application revolves around a modular and extensible design, leveraging object-oriented programming (OOP) principles and design patterns. Each payment method plugin encapsulates a specific payment gateway's logic, providing a seamless integration experience without directly modifying the core codebase.

### OOP Principles and Design Patterns

SOLID principles, including Single Responsibility Principle (SRP) and Dependency Inversion Principle (DIP), guided the architecture to ensure maintainability and flexibility. The dependency injection pattern, combining DIP and SRP, facilitated the decoupling of components and promoted modularity.

In this context, plugins serve as wrappers for modifying payment components or functions, adhering to the dependency injection pattern. The PaymentPluginFactory dynamically instantiates the appropriate plugin based on the selected payment method, enforcing loose coupling and extensibility.

### JavaScript and TypeScript Considerations

While TypeScript would enforce strict typing and provide native support for OOP concepts, JavaScript's syntactic sugar facilitated the implementation of OOP principles and design patterns. In future iterations, TypeScript could enhance code robustness and maintainability.

## Tools & Libraries

- **Vite**: Rapid bundler used to start and bundle full-stack applications efficiently, with excellent documentation.
- **React Router DOM**: Library for declarative routing in React applications. Although initially installed for real payment gateways, it was later decided to keep everything on one page for the initial submission.
- **React Icons**: Highly supported library for responsive and professional icons, used for the footer.
- **Tailwind CSS**: Intuitive CSS framework with inline styles and utility classes, facilitating rapid development and responsive design.


## Setup and Run Instructions

To set up and run the application:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Access the application at `http://localhost:5173` in your web browser.

## Adding a New Mock Service

To add a new mock service, follow these steps:

1. **Update UI Representation**: 
   - Open `src/plugins/pluginData` and add an object to the `pluginData` array. Include custom key-value pairs such as id and title.
   - This step updates the UI representation by adding a new card detailing the name of the service.

2. **Create Plugin Class**:
   - In the `plugins` folder, create a new plugin class that inherits the abstract class `PaymentPluginInterface`. This abstract class enforces the implementation of its abstract method called `processPayment()`.
   - As it is a mock service, use a pseudo POST request with a boolean return statement that simulates the payment processing logic.

3. **Update PaymentPluginFactory**:
   - Open `src/factories/PaymentPluginFactory` and locate the switch case block.
   - Add a new case for the new mock service. Ensure that the method you use here matches the name you provided in the `pluginData` file.

That's it! Your new mock service is now integrated into the application and can be selected by users through the UI. This approach ensures ease of customization and scalability for future additions of mock payment services.

## Reasons Behind Design Choices

The design choices were made with several considerations in mind:

- **Modularity and Extensibility**: The plugin system allows for easy integration of new payment methods without altering the core codebase, promoting modularity and extensibility.
- **Maintainability and Flexibility**: By adhering to SOLID principles and design patterns, such as dependency injection, the architecture ensures maintainable and flexible code.
- **Ease of Use**: JavaScript's syntactic sugar and design patterns enable intuitive implementation of OOP principles, ensuring ease of use for developers.

## Lessons Learned

The project provided valuable insights into:

- Implementing OOP principles and design patterns in JavaScript.
- Leveraging SOLID principles for maintainable and flexible code.
- Using the dependency injection pattern for decoupling components.
- Exploring options for type safety and robustness, such as TypeScript.

## Future Improvements

Some potential areas for improvement in the future include:

- Enhancing user experience with more intuitive interfaces.
- Integrating real payment gateways for live transactions.
- Improving error handling and edge case scenarios.
- Exploring the adoption of TypeScript for enhanced type safety.

## Deployment

The application is deployed on Github pages for easy access and demonstration.

```
https://hakeem0114.github.io/Payment_Plugin/
```
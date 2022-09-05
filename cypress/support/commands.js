// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

// import { mount } from "cypress/react";
// import { Provider } from "react-redux";
// import { store } from "../../src/redux/store/store";

// Cypress.Commands.add('mount', (options = {}) => {
//     // Use defailt store if none are provided.
//     const { reduxStore = store(), ...mountOptions } = options;

//     const wrappedComponent = <Provider store={reduxStore}><>{component}</></Provider>;
//     return mount(wrappedComponent, mountOptions);
// });
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
Cypress.Commands.add('login', (login, password) => {
  cy.request({
    log: false,
    method: 'POST',
    url: 'http://localhost:8081/gestiondestock/v1/auth/authenticate',
    body: {
      login,
      password
    }
  }).then(response => {
    const { access_token } = response.body
    window.localStorage.setItem('access_token', access_token)
    cy.log('Logged now with ' + login)
  })
})
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

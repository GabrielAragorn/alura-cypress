describe('Sign Up Page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/#/home')
    })

    const users = require('../fixtures/users.json') //require the json file, so then we can use that data mass
    users.forEach(user => {
      it('Fill the form fields correctly to register a new user', () => {
        cy.contains('a', 'Register now').click()
        cy.get('[data-test="email"]').type(user.email)
        cy.get('[data-test="fullName"]').type(user.fullName) //the get is grabing an element from the page that is tagged 
        cy.get('[data-test="registerUserName"]').type(user.userName) //type write in the field
        cy.get('[data-test="registerPassword"]').type(user.password)
        cy.contains('button', 'Register').click()
      })
    })

})
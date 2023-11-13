describe('Sign In Page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 401
        }).as('stubPost') //stubPost implements a interaction direct with the API and implements the error 401
    })
    it('Verify the message of required fields', () => {
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')
    })

    it('Must fails even when the fields is filled correctly', () => {
        cy.login('jimhalp', 'jimbo321')
        cy.wait('@stubPost')
    })
})
describe('Sign Page', () => {
    it('Field the required fields to login successfully', () => {
        cy.visit('http://localhost:4200/#/home')
        cy.get('[data-test="loginUserName"]').type('jimbo')
        cy.get('[data-test="loginPassword"]').type('jimbo1234')
        cy.contains('button', 'login').click()
    });
})
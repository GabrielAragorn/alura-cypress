describe('Sign Up Page', () => {
    it('Fill the form fields incorrecly to register a new user', () => {
      cy.visit('http://localhost:4200/#/home') //visit the page
      cy.contains('a', 'Register now').click() //verify if the page has an anchor tag named as "Register Now" then click on it
      cy.contains('button', 'Register').click() //verify if the page has a button named as "Register then click"
      cy.contains('button', 'Register').click()
      cy.contains('Email is required').should('be.visible') //after verified the text on the page, makes an assertion to test if the text is visible or not
      cy.contains('Full name is required!').should('be.visible')
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    })
  })
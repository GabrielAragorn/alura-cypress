describe('Sign Up Page', () => {
    // it('API Data', () => {
    //   cy.request({
    //     method:'POST',
    //     url: 'http://localhost:3000/user/login',
    //     body: Cypress.env() //this will use cypress.env.json file for this requisition
    //   }).then((res) => {
    //     expect(res.status).to.be.equal(200)
    //     expect(res.body).is.not.empty
    //     expect(res.body).to.have.property('id')
    //     expect(res.body.id).to.be.equal(3)
    //   })
    // })

    it('User photos', () => {
      cy.request({
        method:'GET',
        url: 'http://localhost:3000/jimhalp/photos', //getting the photos url

      }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body[0]).to.have.property('description') //expecting the photo that are in position 0 and it description
        expect(res.body[0].description).to.be.equal('skull night') //expecting the photo title
      })
    })
  })
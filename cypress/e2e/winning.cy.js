describe('Winning Automation Exercise', () => {
  it('Login, Filter, Add to cart & Validate ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'https://www.saucedemo.com')
    
  })
})
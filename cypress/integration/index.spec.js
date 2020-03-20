context('Integration test index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('.get', () => {
    cy.get('.v-card').should('have.class', 'v-card')
    cy.get('.v-card__title').should('contain', 'Nuxt.js template')
    cy.get('.v-card__text').find('a').should('have.length', 3)
    cy.get('a').should('have.attr', 'href')
      .debug()
  })
})

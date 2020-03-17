/// <reference types="cypress" />

context('List Overview', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add list', () => {
    const now = new Date()
    const timestamp = now.getTime()
    const name = `test-list-${timestamp}`

    cy.get('#addList').within(() => {
      cy.get('input').type(`${name}{enter}`)
    })

    cy.get('#lists').within(() => {
      cy.get('a').last().contains(name).click()
    })

  })
})

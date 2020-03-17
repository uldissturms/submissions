/// <reference types="cypress" />

const postList = name =>
  `{"operationName":"createList","variables":{"name":"${name}"},"query":"mutation createList($name: String!) {createList(name: $name) {id name }}"}`

const deleteList = id =>
  `{"operationName":"deleteList","variables":{"id":"${id}"},"query":"mutation deleteList($id: ID!) {deleteList(id: $id)}"}`

const now = new Date()
const timestamp = now.getTime()

const listName = `test-list-${timestamp}`
const listItem = `test-item-${timestamp}`

context('List Details', () => {
  let listId

  beforeEach(() => {
    return cy
      .request({
        method: 'POST',
        url: 'http://localhost:4000',
        body: postList(listName),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        const {
          data: {
            createList: { id }
          }
        } = res.body
        listId = id
        cy.visit('/')
        cy.get('#lists').within(() => {
          cy.get('a')
            .last()
            .contains(listName)
            .click()
        })
      })
  })

  afterEach(() => {
    return cy.request({
      method: 'POST',
      url: 'http://localhost:4000',
      body: deleteList(listId),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })

  it('Add item to list', () => {
    const count = 3
    const names = new Array(count).fill(listItem).map((x, idx) => `${x}-${idx}`)
    cy.get('#addItem').within(() => {
      for (const n of names) {
        cy.get('input').type(`${n}{enter}`)
      }
    })
    const [first, second] = names
    cy.get('#items').within(() => {
      cy.get('div')
        .should('have.length', count)
        .first()
        .contains(first)
        .next()
        .contains(second)
    })
  })

  it('Remove item from list', () => {
    const count = 2
    const names = new Array(count).fill(listItem).map((x, idx) => `${x}-${idx}`)
    cy.get('#addItem').within(() => {
      for (const n of names) {
        cy.get('input').type(`${n}{enter}`)
      }
    })
    const [, second] = names
    cy.get('#items').within(() => {
      cy.get('div').should('have.length', count)

      // remove first item
      cy.get('div')
        .first()
        .find('svg')
        .click()

      // second is the first now
      cy.get('div')
        .should('have.length', count - 1)
        .first()
        .contains(second)
    })
  })

  it('Remove list', () => {
    const count = 3
    const names = new Array(count).fill(listItem).map((x, idx) => `${x}-${idx}`)

    cy.get('#addItem').within(() => {
      for (const n of names) {
        cy.get('input').type(`${n}{enter}`)
      }
    })

    cy.get('#deleteList').click()
  })
})

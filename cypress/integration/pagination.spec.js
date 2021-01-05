describe('pagination', () => {
  it('should not decrease the page number when the previous page button is clicked if user is on the first page', () => {
    cy.visit('/')
        .get('[data-cy=previous-page-button')
        .click()
        .get('[data-cy=page-number')
        .contains(1)
})
    it('should increase the page number when the next page button is clicked', () => {
        cy
          .get('[data-cy=next-page-button')
          .click()
          .wait(2000)
          .get('[data-cy=page-number')
          .contains(2)
    })
    it('should decrease the page number when the previous page button is clicked', () => {
      cy
        .get('[data-cy=previous-page-button')
        .click()
        .wait(2000)
        .get('[data-cy=page-number')
        .contains(1)
  })
})

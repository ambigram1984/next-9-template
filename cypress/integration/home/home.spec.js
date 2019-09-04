context("Example of testing the home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("finds the home link", () => {
    cy.getByText("Hello page.")
  })

  it("finds the about links", () => {
    cy.getByTestId("about-page")
    cy.getAllByText("About page.")
  })

  it("finds the readme text", () => {
    cy.getByText("Check out dat README!")
  })
})

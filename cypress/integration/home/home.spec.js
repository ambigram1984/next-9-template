context("Example of testing the home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("finds the home link", () => {
    cy.findByText("Hello page.")
  })

  it("finds the about links", () => {
    cy.findByTestId("about-page")
    cy.findAllByText("About page.")
  })

  it("finds the readme text", () => {
    cy.findByText("Check out dat README!")
  })

  it("can link to google", () => {
    cy.findByText("Google Link").click()
  })
})

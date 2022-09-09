describe("Render the Home Page components:", () => {
    before(() => {
        cy.visit("/home");
    });
    it("Renders correctly Loading View", () => {
        cy.get("#loadingView").should("exist");
    })
    it("Renders correctly NavBar", () => {
        cy.get("#componentNavBar").should("exist");
    })
    it("Renders correctly SideBar", () => {
        cy.get("#componentSidebar").should("exist");
    })
    it("Renders correctly Logo", () => {
        cy.get("#componentLogo").should("exist");
    })
    it("Renders correctly Links", () => {
        cy.get("#componentLinks").should("exist");
    })
    it("Renders correctly Hall of Fame", () => {
        cy.get("#componentHallOfFame").should("exist");
    })
})
describe("Render the Detail Page components:", () => {
    before(() => {
        cy.visit("/home");
        cy.findAllByText("All Players").should("exist");
        cy.findAllByText("All Players").first().click();
        cy.url().should("include", "search");
        cy.get('button[name=details]').first().click();
    });
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
    it("Renders correctly Card Details", () => {
        cy.get("#componentCardDetail").should("exist");
    })
});


describe("Render Card Details elements", () => {
    it("Card Player: Renders correctly Card Image", () => {
        cy.get("#imageCardDetail").should("exist");
    })
    it("Card Player: Renders correctly Card Title", () => {
        cy.get("#titleCardDetail").should("exist");
    })
    it("Card Player: Renders correctly Card Status", () => {
        cy.get("#statusCardDetail").should("exist");
    })
    it("Card Player: Renders correctly Card ID", () => {
        cy.get("#infoCardDetail").should("exist");
    })
    it("Card Player: Renders correctly Card Ranking", () => {
        cy.get("#rankingCardDetail").should("exist");
    })
    it("Renders correctly boton Edit Profile", () => {
        cy.visit("/login");
        cy.findAllByText("Sign In here!").click();
        cy.get('input[name=email]').type('gabrielpitrella@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.get('form').find('button[type=submit]').click();
        cy.get('#playerIcon').should("exist");
        cy.get('#playerIcon').click();
        cy.findAllByText('View Profile').should("exist");
        cy.findAllByText('View Profile').click();
        cy.get('button[name=editprofile]').should("exist");        
    })
    it("Renders correctly boton Confirme Change", () => {
        cy.get('button[name=editprofile]').click();
        cy.get('button[name=confirme]').should("exist");        
    })
    it("Close correctly Card Details", () => {
        cy.get('button[name=closeCardDetail]').should("exist");
        cy.get('button[name=closeCardDetail]').click();
        cy.url().should('not.include', "/player");
        cy.url().should('include', "/search");
    })
})


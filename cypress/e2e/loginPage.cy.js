const randomNumber = Cypress.env("randomNumber")

describe("Render the Login components:", () => {
    before(() => {
        cy.visit("/home");
        cy.get("#loadingView").should("exist");
        cy.get("button[name=buttonLoginNavbar]").should("exist");
        cy.get("button[name=buttonLoginNavbar]").click();
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
    it("Renders correctly Login", () => {
        cy.get("#componentLogin").should("exist");
    })
});

describe("Render the Login", () => {
    it("Sign Up Form: Check exist inputs", () => {
        cy.get('input[name=email]').should("exist");
        cy.get('input[name=nickname]').should("exist");
        cy.get('input[name=password]').should("exist");
        cy.get('input[name=image]').should("exist");
        cy.findAllByText("Sign In here!").should("exist");
    })
    it("Sign Up Form: check empty data before submit", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.findAllByText('Add an e-mail').should("exist");
        cy.findAllByText('Add a nickname').should("exist");
        cy.findAllByText('Add a password').should("exist");
    })
    it("Sign Up Form: submit wrong", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.url().should("not.include", "home");
        cy.url().should("include", "login");
    })
    xit("Sign Up Form: Submit OK", () => { 
        cy.get('input[name=email]').type(`testlogin${randomNumber}@gmail.com`);
        cy.get('input[name=nickname]').type('testbugnickname');
        cy.get('input[name=password]').type('123456');
        cy.get('form').find('button[type=submit]').click();
        cy.url().should('not.include', { timeout: 10000 }, "login");
        cy.url().should('include', "home");
    })
    it("Sign In Form: Check exist inputs", () => {
        cy.findAllByText("Sign In here!").should("exist");
        cy.findAllByText("Sign In here!").click();
        cy.get('input[name=email]').should("exist");
        cy.get('input[name=password]').should("exist");
        cy.get('input[name=nickname]').should("not.exist");
        cy.get('input[name=avatar]').should("not.exist");
        cy.findAllByText("Sign Up here!").should("exist");
    })
    it("Sign In Form: check empty data before submit", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.findAllByText('Add an e-mail').should("exist");
        cy.findAllByText('Add a password').should("exist");
    })
    it("Sign In Form: submit wrong", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.url().should("not.include", "home");
        cy.url().should("include", "login");
    })
    it("Sign In Form: submit OK", () => { 
        cy.get('input[name=email]').type('gabrielpitrella@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.get('form').find('button[type=submit]').click();
        cy.url().should('not.include', "login");
        cy.url().should('include', "home");
     })
    it("Logout OK", () => { 
        cy.get('#playerIcon').should("exist");
        cy.get('#playerIcon').click();
        cy.findAllByText('Logout').should("exist");
        cy.findAllByText('Logout').click();
        cy.url().should('include', "home");
    })

    it("Email input: Check exist input", () => {
        cy.visit("/login");
        cy.get('input[name=email]').type('testbug@gmail.com').clear()
    })
    it("Email input: Check correct e-mail input", () => {
        cy.get('input[name=email]').type('testbutmail.com')
        cy.findAllByText("Insert a valid e-mail adress").should("exist");
        cy.get('input[name=email]').clear()
    })
    it("Nickname input: Check exist input", () => {
        cy.get('input[name=nickname]').type('testbugnickname').clear()
    })
    it("Nickname input: Check length's nickname input", () => {
        cy.get('input[name=nickname]').type('testb')
        cy.findAllByText("Minimum of 6 characters").should("exist");
    })
    it("Nickname input: Check nickname input without special caracters", () => {
        cy.get('input[name=nickname]').clear().type('testbugs%')
        cy.findAllByText("Add nickname without Symbols").should("exist");
        cy.get('input[name=nickname]').clear()
    })
    it("Password input: Check exist input", () => {
        cy.get('input[name=password]').type('pass12345').clear();
    })
    it("Password input: Check length's password input", () => {
        cy.get('input[name=password]').type('pass1');
        cy.findAllByText("Minimum of 6 characters").should("exist");
    })
    it("Password input: Check password input without special caracters", () => {
        cy.get('input[name=password]').clear().type('pass$123')
        cy.findAllByText("Add password without Symbols").should("exist");
        cy.get('input[name=password]').clear();
    })
})
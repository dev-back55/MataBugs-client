const randomNumber = Cypress.env("randomNumber")

describe("Render the Login", () => {
    // beforeEach(() => {
    //     cy.visit("/login");
    // });    
    xit("Renders correctly component Login", () => {
        cy.visit("/login");
        cy.get(".LogInLogUp_container__JYEzn").should("exist");
    })
    xit("Sign Up Form: Check exist inputs", () => {
        cy.get('input[name=email]').should("exist");
        cy.get('input[name=nickname]').should("exist");
        cy.get('input[name=password]').should("exist");
        cy.get('input[name=avatar]').should("exist");
        cy.findAllByText("Sign In here!").should("exist");
    })
    xit("Sign Up Form: check empty data before submit", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.findAllByText('Add an email').should("exist");
        cy.findAllByText('Add a nickname').should("exist");
        cy.findAllByText('Add a password').should("exist");
    })
    xit("Sign Up Form: submit wrong", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.url().should("include", "login");
    })
    xit("Sign Up Form: Submit OK", () => { 
        cy.visit("/login");
        cy.get('input[name=email]').type(`testlogin${randomNumber}@gmail.com`);
        cy.get('input[name=nickname]').type('testbugnickname');
        cy.get('input[name=password]').type('123456');
        cy.get('form').find('button[type=submit]').click();
        cy.url().should('not.include', { timeout: 10000 }, "/login");
        cy.url().should('include', "/");
    })
    xit("Sign In Form: Check exist inputs", () => {
        cy.visit("/login");
        cy.findAllByText("Sign In here!").should("exist");
        cy.findAllByText("Sign In here!").click();
        cy.get('input[name=email]').should("exist");
        cy.get('input[name=password]').should("exist");
        cy.get('input[name=nickname]').should("not.exist");
        cy.get('input[name=avatar]').should("not.exist");
        cy.findAllByText("Sign Up here!").should("exist");
    })
    xit("Sign In Form: check empty data before submit", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.findAllByText('Add an email').should("exist");
        cy.findAllByText('Add a password').should("exist");
    })
    xit("Sign In Form: submit wrong", () => {
        cy.get('form').find('button[type=submit]').click();
        cy.url().should("include", "login");
    })
    xit("Sign In Form: submit OK", () => { 
        cy.visit("/login");
        cy.findAllByText("Sign In here!").click();
        cy.get('input[name=email]').type('gabriel5@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.get('form').find('button[type=submit]').click();
        cy.url().should('not.include', { timeout: 10000 }, "/login");
        cy.url().should('include', "/");
    })

    xit("Email input: Check exist input", () => {
        cy.visit("/login");
        cy.get('input[name=email]').type('testbug@gmail.com').clear()
    })
    xit("Email input: Check correct email input", () => {
        cy.get('input[name=email]').type('testbutmail.com')
        cy.findAllByText("Insert a valid email adress").should("exist");
        cy.get('input[name=email]').clear()
    })
    xit("Nickname input: Check exist input", () => {
        cy.get('input[name=nickname]').type('testbugnickname').clear()
    })
    xit("Nickname input: Check length's nickname input", () => {
        cy.get('input[name=nickname]').type('testb')
        cy.findAllByText("Minimum of 6 characters").should("exist");
    })
    xit("Nickname input: Check nickname input without special caracters", () => {
        cy.get('input[name=nickname]').clear().type('testbugs%')
        cy.findAllByText("Add nickname without Symbols").should("exist");
        cy.get('input[name=nickname]').clear()
    })
    xit("Password input: Check exist input", () => {
        cy.get('input[name=password]').type('pass12345').clear();
    })
    xit("Password input: Check length's password input", () => {
        cy.get('input[name=password]').type('pass1');
        cy.findAllByText("Minimum of 6 characters").should("exist");
    })
    xit("Password input: Check password input without special caracters", () => {
        cy.get('input[name=password]').clear().type('pass$123')
        cy.findAllByText("Add password without Symbols").should("exist");
        cy.get('input[name=password]').clear();
    })
    xit("Avatar input: Check exist input", () => {
        cy.get('input[name=avatar]').type('https://www.imdb.com/txitle/tt0499549/mediaviewer/rm371527425/?ref_=tt_ov_i')
    })
    xit("Avatar input: Check correct link input", () => {
        cy.get('input[name=avatar]').clear().type('https/txitle/tt0499549/mediaviewer/rm37152ef_=tt_ov_i')
        cy.findAllByText("Add a correct link").should("exist");
        cy.get('input[name=avatar]').clear()
    })
})
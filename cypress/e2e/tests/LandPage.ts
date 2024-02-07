export class LandPage {
    url: string = "https://main--realworld-docs.netlify.app/";

    visit(): void {
        cy.visit(this.url);
    }

    click(classes: string) {
        const button = cy.get(classes);
        const url = button.click().url();
    }
}

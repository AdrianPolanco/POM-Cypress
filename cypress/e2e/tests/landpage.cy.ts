import { LandPage } from "./LandPage";

const landpage: LandPage = new LandPage();

describe("Landpage testing", () => {
    it("Visit the land page", () => {
        landpage.visit();
        landpage.click(".button.button--primary.button--lg");
    });
});

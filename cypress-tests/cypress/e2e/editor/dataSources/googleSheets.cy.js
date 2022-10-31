import { fake } from "Fixtures/fake";
import { textInputText } from "Texts/textInput";
import { commonWidgetText, widgetValue, customValidation } from "Texts/common";
import { commonSelectors, commonWidgetSelector } from "Selectors/common";
import { buttonText } from "Texts/button";
import {
  verifyControlComponentAction,
  randomString,
} from "Support/utils/textInput";
import {
  openAccordion,
  verifyAndModifyParameter,
  openEditorSidebar,
  verifyAndModifyToggleFx,
  addDefaultEventHandler,
  verifyComponentValueFromInspector,
  selectColourFromColourPicker,
  verifyBoxShadowCss,
  verifyLayout,
  verifyTooltip,
  editAndVerifyWidgetName,
  verifyPropertiesGeneralAccordion,
  verifyStylesGeneralAccordion,
  randomNumber,
} from "Support/utils/commonWidget";

describe("Text Input", () => {
  beforeEach(() => {
    cy.appUILogin();
    cy.createApp();
  });

  it("should verify the properties of the text input widget", () => {
    cy.get('[data-cy="left-sidebar-sources-button"]').click();
    // cy.get('[class="btn btn-sm add-btn"]').click();
    cy.get('[value="sheets"]').type("sheets");
    cy.wait(5000);
    // cy.get('[class="card-body"]:eq(0)').click();

    cy.log("--------------------------------");

    cy.request({
      method: "POST",
      url: "https://www.googleapis.com/oauth2/v4/token",
      body: {
        grant_type: "refresh_token",
        client_id: Cypress.env("googleClientId"),
        client_secret: Cypress.env("googleClientSecret"),
        //   refresh_token: Cypress.env('googleRefreshToken'),
      },
    }).then(({ body }) => {
      const { access_token, id_token } = body;

      cy.request({
        method: "GET",
        url: "https://www.googleapis.com/oauth2/v3/userinfo",
        headers: { Authorization: `Bearer ${access_token}` },
      }).then(({ body }) => {
        cy.log(body);
        const userItem = {
          token: id_token,
          user: {
            googleId: body.sub,
            email: body.email,
            givenName: body.given_name,
            familyName: body.family_name,
            imageUrl: body.picture,
          },
        };

        window.localStorage.setItem("googleCypress", JSON.stringify(userItem));
      });
    });
  });

  it("should verify the app preview", () => {});
});

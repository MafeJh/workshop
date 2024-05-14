describe("Doctors page", () => {
  beforeEach(async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
  });

  it("Check page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("Open modal window for adding a new doctor", async () => {
    // click on doctors item in the side menu
    await $('[routerlink="/doctors"]').click();
    // click on add new doctor btn
    await $(".specialization-types button.e-normal").click();
    //check that a modal window is displayed
    await expect($(".new-doctor-dialog#dialog_757320498_0")).toBeDisplayed();
  });

  it("Add a new doctor", async () => {
    // click on doctors item in the side menu
    await $('[routerlink="/doctors"]').click();
    // click on add new doctor btn
    await $(".specialization-types button.e-normal").click();
    // wait for visibility of modal window
    await $(".new-doctor-dialog#dialog_757320498_0").waitForDisplayed();

    await $('[name="Name"]').setValue("Odin");
    await $("#DoctorMobile").setValue("1111111111");
    await $('[name="Email"]').setValue("test@test.com");
    await $('[name="Education"]').setValue("Basic");
    await $('[name="Designation"]').setValue("Test");

    await $(".e-footer-content button.e-primary").click();

    await expect($(".new-doctor-dialog")).not.toBeDisplayed();

    await expect($("#Specialist_8").$(".name")).toHaveText("Dr. Odin");
    await expect($("#Specialist_8").$(".education")).toHaveText("Basic", {
      ignoreCase: true,
    });
  });

  it("Close a modal window for adding a new doctor", async () => {
    await $('[routerlink="/doctors"]').click();
    await $(".specialization-types button.e-normal").click();
    await $(".new-doctor-dialog#dialog_757320498_0").waitForDisplayed();
    await $(
      ".new-doctor-dialog#dialog_757320498_0 .e-dlg-closeicon-btn"
    ).click();
    await expect(
      $(".new-doctor-dialog#dialog_757320498_0")
    ).not.toBeDisplayed();
  });
});

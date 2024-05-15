const { pages } = require("./../po");

describe("Doctors page", () => {
  beforeEach(async () => {
    await pages("dashboard").open();
  });

  it("Check page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("Open modal window for adding a new doctor", async () => {
    // click on doctors item in the side menu
    await pages("dashboard").sideMenu.item("doctors").click();
    // click on add new doctor btn
    await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
    //check that a modal window is displayed
    await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
  });

  it("Add a new doctor", async () => {
    await pages("dashboard").sideMenu.item("doctors").click();
    await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
    await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();

    await pages("doctors").addDoctorModal.input("name").setValue("Odin");
    await pages("doctors").addDoctorModal.input("phone").setValue("1111111111");
    await pages("doctors")
      .addDoctorModal.input("email")
      .setValue("test@test.com");
    await pages("doctors").addDoctorModal.input("education").setValue("Basic");
    await pages("doctors").addDoctorModal.input("designation").setValue("Test");

    await pages("doctors").addDoctorModal.saveBtn.click();

    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();

    await expect(pages("doctors").specialistCard(8).name).toHaveText(
      "Dr. Odin"
    );
    await expect(pages("doctors").specialistCard(8).education).toHaveText(
      "Basic",
      { ignoreCase: true }
    );
  });

  it("Close a modal window for adding a new doctor", async () => {
    await pages("dashboard").sideMenu.item("doctors").click();
    await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
    await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();
    await pages("doctors").addDoctorModal.closeBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
  });
});

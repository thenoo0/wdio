//npx wdio run ./wdio.conf.ts --spec autoTest.ts


describe("autoTest", () => {
  it("tests autoTest", async () => {
    await browser.setWindowSize(865, 551)
    await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
     await browser.$("aria/Add Element").click()
    await browser.$("aria/Add Element").click()
    await browser.$("//*[@id=\"elements\"]/button[2]").click()
    await browser.$("#elements > button").click()
  });
});

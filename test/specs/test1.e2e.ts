describe('Hello world',  () => {
    it('Lets visit google',async () => {
        const acceptCookiesButton = await $('#L2AGLb > div');
        const searchBar = await $('textarea.gLFyf[title="Szukaj"]');

        await browser.url('https://google.com');
        await acceptCookiesButton.click();
        await searchBar.setValue('WebdriverIO');
        await browser.keys('Enter');
        await browser.pause(10000);
    })


})
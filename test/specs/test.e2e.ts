//npx wdio run ./wdio.conf.ts --spec test.e2e.ts

import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import MenuPage from '../pageobjects/menu.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })

    it('should click on menu', async () => {
        await MenuPage.open();
        await MenuPage.clickHomeButton();

    })
})


import { $ } from '@wdio/globals'
import Page from './page.ts'

class Menu extends Page {

    public get homeButton() {
        return $(`a[href='#home']`);
    }

    public async open() {
        return super.open('floating_menu');
    }

    public async clickHomeButton() {
        await this.homeButton.click();
    }

}

export default new Menu()
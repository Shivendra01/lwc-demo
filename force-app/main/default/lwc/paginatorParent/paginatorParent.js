import { LightningElement } from 'lwc';

export default class PaginatorParent extends LightningElement {
    page = 1;
    disabled = true;

    handlePrevious() {
        if (this.page > 1) {
            this.page = this.page - 1;
        }
        if (this.page == 1) {
            this.disabled = true;
        }
    }

    handleNext() {
        this.disabled = false;
        this.page = this.page + 1;
    }
}
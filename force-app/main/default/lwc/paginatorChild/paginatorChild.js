import { LightningElement, api } from 'lwc';

export default class PaginatorChild extends LightningElement {

    @api disabled;

    handlePrevious() {
        this.dispatchEvent(new CustomEvent('previous'));
    }

    handleNext() {
        this.dispatchEvent(new CustomEvent('next'));
    }
}

import { LightningElement, api } from 'lwc';
import { FlowNavigationNextEvent, FlowNavigationFinishEvent, FlowNavigationPauseEvent, FlowNavigationBackEvent, FlowAttributeChangeEvent } from 'lightning/flowSupport';

const navigationEvent = {
    "Next" : new FlowNavigationNextEvent(),
    "Finish" : new FlowNavigationFinishEvent(),
    "Pause" : new FlowNavigationPauseEvent(),
    "Previous" : new FlowNavigationBackEvent()
}

export default class CustomNavigationButtonCmp extends LightningElement {

    @api label;
    @api styleClass; 
    @api action;
    @api variant;
    @api isSelected;
    @api isDisabled;
    @api promptMsg;
    @api nextElement='';

    // Dispach event of type action, according to navigationEvent mapping.
    handleClick(event) {
        if(this.isDisabled) {
            return;
        }
        this.isSelected = true;
            
        try {
            this.dispatchEvent(navigationEvent[event.target.value]);
        } 
        catch (ex) {
            console.log('Exception: ' + ex); // To do: implement exception handling framework. TBD.
        }
    }
}
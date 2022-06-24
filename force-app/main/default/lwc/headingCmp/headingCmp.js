import { LightningElement, api } from 'lwc';

export default class HeadingCmp extends LightningElement {

    // This property is used to set Heading on hero. Input by admin as part of config.
    @api strHeading;
    // This property is used to set Description on hero. Input by admin as part of config. 
    @api strDescription;
    // This property is used to set the background color of component. Input by admin as part of config.
    @api backgroundColor;
    // This property is used to set the font color of text. Input by admin as part of config.
    @api fontColor;
    // This property is used to set the height of the Hero. Input by admin as part of config.
    @api strHeroHeight;

    //Defining background color and font size for the component based on user input
    get componentStyle() {
        return `background-color:${this.backgroundColor};color:${this.fontColor};height:${this.strHeroHeight}px;`;
    }
}

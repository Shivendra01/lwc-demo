import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {

  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }
}
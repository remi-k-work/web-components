import { BaseComp } from "./base-comp.js";

class MyParagraph extends BaseComp {
  #eventTempFetched = new Event("tempfetched");

  constructor() {
    super();
  }

  connectedCallback() {
    this.fetchTheTemplate("comp-templ.html");
  }
}

customElements.define("my-paragraph", MyParagraph);

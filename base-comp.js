class BaseComp extends HTMLElement {
  #shadowRoot;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: "closed" });
  }

  get shadow() {
    return this.#shadowRoot;
  }

  getSlotTextContent(slotName) {
    const elemSpan = this.querySelector(`span[slot="${slotName}"]`);
    const textContent = elemSpan ? elemSpan.textContent : null;
    return textContent;
  }
  setSlotTextContent(slotName, newTextContent) {
    const elemSpan = this.querySelector(`span[slot="${slotName}"]`);
    if (elemSpan) {
      elemSpan.textContent = newTextContent;
    }
  }

  async fetchTheTemplate(templateUrl) {
    try {
      // Fetch the external template
      const response = await fetch(templateUrl);

      if (!response.ok) {
        // The template could not have been fetched; there was an error
        throw new Error(response.status);
      }

      // Create a template element from the fetched HTML
      const templateHtml = await response.text();
      const elemTemplate = document.createElement("template");
      elemTemplate.innerHTML = templateHtml;

      // Clone the template content and append it to the shadow DOM
      this.#shadowRoot.append(elemTemplate.content.cloneNode(true));

      // The template has been fetched and is ready to use
      return true;
    } catch (error) {
      // The template could not have been fetched; there was an error
      // Rethrow the error for higher-level error handling if needed
      throw error;
    }
  }
}

export { BaseComp };

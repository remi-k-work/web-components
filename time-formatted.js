class TimeFormatted extends HTMLElement {
  #shadowRoot;
  #hasBeenRendered = false;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: "closed" });
  }

  #render() {
    const date = new Date(this.getAttribute("datetime") || Date.now());

    this.#shadowRoot.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("time-zone-name") || undefined,
    }).format(date);
  }

  connectedCallback() {
    if (!this.#hasBeenRendered) {
      this.#render();
      this.#hasBeenRendered = true;
    }
  }

  static get observedAttributes() {
    return [
      "datetime",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "time-zone-name",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.#render();
  }
}

customElements.define("time-formatted", TimeFormatted); // (2)

class LiveTimer extends HTMLElement {
  #shadowRoot;
  #hasBeenRendered = false;
  #elemTimeFormatted = null;
  #timer;
  #date;

  constructor() {
    super();

    // this.#shadowRoot = this.attachShadow({ mode: "open" });

    this.#elemTimeFormatted = this.firstElementChild;
    // this.#shadowRoot.append(this.#elemTimeFormatted);
  }

  connectedCallback() {
    this.#timer = setInterval(() => this.#update(), 1000);
  }

  #update() {
    this.#date = new Date();
    this.#elemTimeFormatted.setAttribute("datetime", this.#date);
    this.dispatchEvent(new CustomEvent("tick", { detail: this.#date }));
  }

  disconnectedCallback() {
    clearInterval(this.#timer); // important to let the element be garbage-collected
  }
}

customElements.define("live-timer", LiveTimer);

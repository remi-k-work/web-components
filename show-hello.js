class ShowHello extends HTMLElement {
  #shadowRoot;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#shadowRoot.innerHTML = `<p>Hello, ${this.getAttribute("name")}</p>`;
  }
}

customElements.define("show-hello", ShowHello);

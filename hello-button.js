// The button that says "hello" on click
class HelloButton extends HTMLButtonElement {
  constructor() {
    super();

    this.addEventListener("click", (ev) => {
      alert(`Hello from ${ev.currentTarget}!`);
    });
  }
}

customElements.define("hello-button", HelloButton, { extends: "button" });

import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./button.css?inline";

/**
 * An basic button element.
 * @csspart button - The button
 */
@customElement("e-button")
export class EssentialButton extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  label = "click me!";

  render() {
    return html`
      <button
        @click=${this._onClick}
        part="button"
        class="base-button ${this.classList.contains("override") ? "override" : ""}"
      >
        ${this.label}
      </button>
    `;
  }

  private _onClick() {}
}

declare global {
  interface HTMLElementTagNameMap {
    "e-button": EssentialButton;
  }
}

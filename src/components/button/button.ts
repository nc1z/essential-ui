import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./button.css?inline";
import { ButtonVariant } from "./button.types";

/**
 * A basic button
 * @element e-button
 * @csspart button - The button
 */
@customElement("e-button")
export class EssentialButton extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  label = "click me!";

  @property({ type: Boolean })
  inverse = false;

  @property({ type: ButtonVariant })
  variant?: ButtonVariant;

  render() {
    return html`
      <button
        @click=${this._onClick}
        part="button"
        class="base-button 
          ${this._getVariantClass(this.variant)} 
          ${this.classList.contains("override") ? "override" : ""}"
      >
        ${this.label}
      </button>
    `;
  }

  private _onClick() {}

  private _getVariantClass(variant?: ButtonVariant) {
    switch (variant) {
      case ButtonVariant.INVERSE:
        return ButtonVariant.INVERSE;
      default:
        return ButtonVariant.DEFAULT;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "e-button": EssentialButton;
  }
}

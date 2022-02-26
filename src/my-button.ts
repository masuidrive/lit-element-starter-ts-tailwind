import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example button element.
 */
@customElement('my-button')
export class MyButton extends LitElement {
  static override styles = css`
    :host {
      font-family: var(font-family);
    }
    __tw_placeholder__
`;

  override render() {
    // https://github.com/merakiui/merakiui/blob/main/components/ui/Alerts/ErrorPop.vue
    // MIT License: Copyright (c) 2021 Baka Team
    return html`
      <button
        type="button"
        class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}

/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */

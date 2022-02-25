/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example error element.
 *
 */
@customElement('my-error')
export class MyError extends LitElement {
  static override styles = css`
    :host {
      font-family: var(--app-font-family);
    }
    __tw_placeholder__
`;

  override render() {
    return html`
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
        role="alert"
      >
        <slot name="title" class="font-bold block mb-2"></slot>
        <slot name="description" class="block sm:inline"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-error': MyError;
  }
}

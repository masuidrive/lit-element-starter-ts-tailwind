import { LitElement } from 'lit';
/**
 * An example error element.
 */
export declare class MyError extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-error': MyError;
    }
}
/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { render } from 'lit-html';
export { html } from 'lit-html';

const stripExpressionMarkers = (html) =>
  html.replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->|lit\$[0-9]+\$/g, '');

export const Template = (template) => (args) => {
  let fragment = new DocumentFragment();
  const generated = template(args)
  render(generated, fragment);

  // remove maker comment
  const html = fragment.firstElementChild.outerHTML;
  let result = document.createElement("div");
  result.innerHTML = stripExpressionMarkers(html);

  return result.firstElementChild;
};

/**
 * @license
 * Copyright 2022- masuidrive.jp
 * SPDX-License-Identifier: BSD-3-Clause
 */
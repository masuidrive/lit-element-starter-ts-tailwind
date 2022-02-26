import { Template, html } from './helpers/stories-helper'

export default {
  title: 'MyButton',
};

const MyButton = ({ label }) => html`
<my-button>
  ${label}
</my-button>
`;

export const Primary = Template(MyButton);
Primary.args = {
  label: 'Click me!',
};

const MyErrorWithParentStyle = ({ style, label }) => html`
<div style="${style}">
  <my-button>
    ${label}
  </my-button>
</div>
`;

export const ChangeFont = Template(MyErrorWithParentStyle);
ChangeFont.storyName = "font-family is inherited from a parent"
ChangeFont.args = {
  style: 'font-family: Arial, Helvetica, sans-serif;',
  label: 'Click me!',
};

/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */
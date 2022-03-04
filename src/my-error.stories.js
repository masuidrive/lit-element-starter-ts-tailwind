import { Template, html } from './helpers/stories-helper'
import '../dist/index';

export default {
  title: 'MyError',
  component: 'my-error',
};

const MyError = ({ title, description }) => html`
<my-error>
  <div slot="title">${title}</div>
  <div slot="description">${description}</div>
</my-error>
`;

export const Primary = Template(MyError);
Primary.args = {
  title: 'title',
  description: 'description',
};

const MyErrorWithParentStyle = ({ style, title, description }) => html`
<div style="${style}">
  <my-error>
    <div slot="title">${title}</div>
    <div slot="description">${description}</div>
  </my-error>
</div>
`;

export const ChangeFont = Template(MyErrorWithParentStyle);
ChangeFont.storyName = "font-family is inherited from a parent"
ChangeFont.args = {
  style: 'font-family: Arial, Helvetica, sans-serif;',
  title: 'title',
  description: 'description',
};

/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */
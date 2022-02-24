import { html } from 'lit-html';

export default {
  title: 'Example/MyError',
};

const MyError = ({ title, description }) => html`
<my-error>
  <div slot="title">${title}</div>
  <div slot="description">${description}</div>
</my-error>
`;

const Template = (args) => MyError(args);

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  description: 'description',
};

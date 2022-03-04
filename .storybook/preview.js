export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// https://github.com/storybookjs/storybook/tree/next/addons/docs/web-components
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);
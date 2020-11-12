import App from '../App.svelte';

export default {
  title: 'Example/App',
  component: App,
  argTypes: {
    name: { control: 'text' },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: App,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'World',
};

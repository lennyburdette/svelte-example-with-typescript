import { render } from '@testing-library/svelte';
import App from './App.svelte';

describe('App', () => {
  it('says hello', () => {
    const { container } = render(App, { name: 'world' });
    expect(container.querySelector('h1').textContent).toEqual('Hello world!');
  });
});

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld.ts', () => {
  it('mount component', async () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld as any);

    expect(wrapper.text()).toContain('Build:');
  });
});

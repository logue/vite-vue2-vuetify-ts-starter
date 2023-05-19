import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    // In Vue3 `propsData` becomes `props`.
    const wrapper = mount(HelloWorld, { propsData: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});

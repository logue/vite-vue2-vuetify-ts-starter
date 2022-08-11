import { beforeAll } from 'vitest';
(global as any).CSS = { supports: () => false };

beforeAll(() => {
  console.log('📝[vitest] beforeAll');
  global.CSS = {
    supports: (str: string) => false,
    escape: (str: string) => str,
  };
  console.log(
    '📝[vitest] CSS.support:' + CSS.supports('selector(:focus-visible)')
  );
});

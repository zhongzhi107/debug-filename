import importFresh from 'import-fresh';

describe('debug-filename', () => {
  let debug;

  beforeEach(() => {
    debug = importFresh('../src/index.ts');
    if (debug.default) {
      debug = debug.default;
    }
  });

  afterEach(() => {
    delete process.env.DEBUG;
  });

  test('should exist', () => {
    expect(debug).toBeDefined();
  });
});

const hello = require('../src/hello');

describe('Hello関数のテスト', () => {
  it('出力が正しく出力されるか', () => {
    const actual = hello.main('AAA');
    const value = {
      number: 100,
      str: 'body: AAA',
    };

    expect(value.toString()).toBe(actual.toString());
  });
});

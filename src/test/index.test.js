const sum = require('./index');
const { describe } = require('node:test');
const assert = require('node:assert');

describe('test sum', t => {
  const expect = 3;
  const res = sum(1, 2);
  assert.strictEqual(expect, res);
});

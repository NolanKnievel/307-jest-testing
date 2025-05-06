// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 2;
  const got = mut.div(12, 6);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = true;
  const got = mut.containsNumbers('Hello123');
  expect(got).toBe(expected);
});
test('Testing containsNumbers -- failure', () => {
  const expected = false;
  const got = mut.containsNumbers('Hello');
  expect(got).toBe(expected);
});
test('Testing containsNumbers -- success', () => {
  const expected = true;
  const got = mut.containsNumbers('123');
  expect(got).toBe(expected);
});

// A BUG!
test('Testing containsNumbers -- failure', () => {
    const expected = false;
    const got = mut.containsNumbers('No numbers here');
    expect(got).toBe(expected);
  });
  
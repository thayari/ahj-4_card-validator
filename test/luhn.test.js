import luhn from '../src/luhn';

test('validate with luhn algorithm', () => {
  expect(luhn('4276844012951422')).toBe(true);
})

import paySystem from '../src/paysystem';

test('not verified 1', () => {
  expect(paySystem('15')).toBeFalsy();
})

test('not verified 2', () => {
  expect(paySystem('32')).toBeFalsy();
})

test('not verified 3', () => {
  expect(paySystem('69')).toBeFalsy();
})

test('not verified 4', () => {
  expect(paySystem('59')).toBeFalsy();
})

test('mir', () => {
  expect(paySystem('21')).toBe('mir');
})

test('diners', () => {
  expect(paySystem('30')).toBe('diners');
})

test('jcb', () => {
  expect(paySystem('31')).toBe('jcb');
})

test('american', () => {
  expect(paySystem('34')).toBe('american');
})

test('visa', () => {
  expect(paySystem('40')).toBe('visa');
})

test('maestro', () => {
  expect(paySystem('50')).toBe('maestro');
})

test('mastercard', () => {
  expect(paySystem('52')).toBe('mastercard');
})

test('discover', () => {
  expect(paySystem('60')).toBe('discover');
})

test('unionpay', () => {
  expect(paySystem('62')).toBe('unionpay');
})

test('maestro 2', () => {
  expect(paySystem('66')).toBe('maestro');
})

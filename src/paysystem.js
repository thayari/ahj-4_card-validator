export default function paySystem(input) {
  let result;
  switch (input[0]) {
    case '2':
      result = 'mir';
      break;
    case '3':
      if (input[1] === '0' || input[1] === '6' || input[1] === '8') {
        result = 'diners';
      } else if (input[1] === '1' || input[1] === '5') {
        result = 'jcb';
      } else if (input[1] === '4' || input[1] === '7') {
        result = 'american';
      } else {
        result = undefined;
      }
      break;
    case '4':
      result = 'visa';
      break;
    case '5':
      if (input[1] === '0' || input[1] === '6' || input[1] === '7' || input[1] === '8') {
        result = 'maestro';
      } else if (input[1] === '1' || input[1] === '2' || input[1] === '3' || input[1] === '4' || input[1] === '5') {
        result = 'mastercard';
      } else {
        result = undefined;
      }
      break;
    case '6':
      if (input[1] === '0') {
        result = 'discover';
      } else if (input[1] === '2') {
        result = 'unionpay';
      } else if (input[1] === '6' || input[1] === '7') {
        result = 'maestro';
      } else {
        result = undefined;
      }
      break;
    default:
      result = undefined;
  }
  return result;
}

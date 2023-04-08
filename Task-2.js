// Задание 2

function checkPropInObj (str, obj) {
  return (str in obj);
}

const objExample = {
  one: 'qweasd',
  two: 11,
}

let a = checkPropInObj ('five', objExample) 
console.log(a)
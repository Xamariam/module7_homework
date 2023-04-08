// Задание 1

function showKeys(obj) {
  for (let key in obj) {

      if (obj.hasOwnProperty(key)) {

          console.log(`${key} : ${obj[key]}`); 
      }
  }
}
const person = {

  city: "Moscow",
  name: "Semen",
  age: 26
}

const student = Object.create(person);
student.ownCity = "Piter";
student.name = "Egor";
showKeys(student);
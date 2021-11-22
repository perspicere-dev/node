const os = require('os'); //works as import. Here I add this funcionality from node - module 'os' 'załaduj moduł os jako stałą os.'
const fs = require('fs');
// console.log('platform: ', os.platform());
// console.log('arch: ', os.arch(), 'user info: ', os.userInfo());

const genders = ['male', 'female'];

const maleNames = ['John', 'Carl', 'Peter', 'Michail', 'Cuba', 'Max', 'Justin'];

const femaleNames = ['Amy', 'Maia', 'Mendy', 'Ann', 'Eliza', 'Monica', 'Lila'];

const lastNames = ['Ritt', 'Smith', 'Junior', 'Sleigh', 'Olask', 'Bloom'];

const people = [];

const randChoise = (arr) => arr[Math.floor(Math.random()*arr.length)];

for(let i = 0; i < 20; i++) {
    const newPerson = {
        gender: randChoise(genders),
        firstName: '',
        lastName: randChoise(lastNames),
        age: Math.floor(Math.random() * (60)) + 18, 
        email: '',
        phone: Math.floor(Math.pow(10, 8) + Math.random() * 9 * Math.pow(10, 8)),
    }
    newPerson.firstName = newPerson.gender == 'male' ? randChoise(maleNames) : randChoise(femaleNames),
    newPerson.email =  `${newPerson.firstName}.${newPerson.lastName}@gmail.com`.toLocaleLowerCase();
    people.push(newPerson)
};
console.log(people)
const jsonPeople = JSON.stringify(people);

fs.writeFile('people.json', jsonPeople, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

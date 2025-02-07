let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);
people.splice(people.indexOf("Dani"),1);
people.splice(people.indexOf("Juan"),1);
people.unshift(people.splice(people.indexOf("Luis"),1)[0]);
people.push("Bryan");

for(let person of people){
    console.log(person);
   if(person.localeCompare("Maria") === 0){
        break;
   }
}

console.log(people.indexOf("Maria"));
console.log(people.length);
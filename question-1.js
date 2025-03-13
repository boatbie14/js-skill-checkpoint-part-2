const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

const totalPeopleUnder20 = (techupPeople, techcoolPeople) => {
  let totalPeople = [...techupPeople, ...techcoolPeople];
  return totalPeople.filter((people) => people.age < 20);
};

console.log(totalPeopleUnder20(techupPeople, techcoolPeople));

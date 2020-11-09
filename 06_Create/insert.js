use("contactData");

// insert one
db.persons.insertOne({ name: "Mario", age: 45, hobbies: ["Music"] });
db.persons.insertOne({ name: "Mariarosa", age: 44, hobbies: ["Cooking"] });
db.persons.find();

// insert many
const people = [
  { name: "Roberto", age: 75, hobbies: ["Painting"] },
  { name: "Maria", age: 70, hobbies: ["Teaching", "Cooking"] },
];
db.persons.insertMany(people);
db.persons.countDocuments();

// insert (deprecated)
db.persons.insert({ name: "Gino", age: 66 });
db.persons.insert([{ name: "Menega", age: 88 }]);
db.persons.find();

const hobbies = [{ name: "Music" }, { name: "Sport" }, { name: "Cooking" }];
db.hobbies.insertMany(hobbies);

// ordered false -> continue inserting
hobbies.push({ name: "Bike" });
db.hobbies.insertMany(hobbies, { ordered: false });

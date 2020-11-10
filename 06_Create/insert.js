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

// Write concern
db.persons.insertOne({ name: "Chrissy", age: 23 }, { writeConcern: { w: 1 } });
db.persons.insertOne({ name: "Alex", age: 36 }, { writeConcern: { w: 0 } });
// journal
db.persons.insertOne(
  { name: "Michela", age: 22 },
  { writeConcern: { w: 1, j: true } }
);
// w timeout
db.persons.insertOne(
  { name: "Miky", age: 22 },
  { writeConcern: { w: 1, j: true, wtimeout: 1 } }
);
db.persons.find();

// import from file
//mongoimport shows.json -d tvShows -c movies --jsonArray --drop
use("tvShows");
db.tvShows.movies.find();

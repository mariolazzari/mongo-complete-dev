// elements operators
use("user");
db.users.insertMany([
  {
    name: "Mario",
    age: 45,
    hobbies: [{ name: "Sport", frequency: 3 }],
    phone: 123456789,
  },
  {
    name: "Mariarosa",
    hobbies: [{ name: "Cooking", frequency: 1 }],
    phone: "0123456789",
  },
]);

// exists
db.users.find({ age: { $exists: true } });
db.users.find({ age: { $exists: false } });

// exists null
db.users.insertOne({
  name: "Maria",
  age: null,
  hobbies: [{ name: "Writing", frequency: 1 }],
  phone: 123456789,
});
db.users.find({ age: { $exists: true, $ne: null } });
db.users.find({ age: { $exists: true } });

// type
db.users.find({ phone: { $type: "number" } });
db.users.find({ phone: { $type: "string" } });

// regex
use("shows");
db.movies.find({ summary: { $regex: /musical/ } });

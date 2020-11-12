use("user");

db.users.find({ "hobbies.name": "Sport" });
db.users.insertOne({ name: "Chris", hobbies: ["Sport", "Cooking", "Hiking"] });

// size
db.users.find({ hobbies: { $size: 3 } });

// all operator
use("shows");
db.movies.find({ genre: { $all: ["action", "thriller"] } });

// elemMatch
use("user");
db.users.find({
  hobbies: { $elemMatch: { name: "Sport", frequency: { $gt: 1 } } },
});

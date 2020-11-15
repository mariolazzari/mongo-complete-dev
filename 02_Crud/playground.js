use("flights");

// insert many documents
db.flightData.insertMany([
  {
    departureAirport: "MUC",
    arrivalAirport: "SFO",
    aircraft: "Airbus A380",
    distance: 12000,
    intercontinental: true,
  },
  {
    departureAirport: "LHR",
    arrivalAirport: "TXL",
    aircraft: "Airbus A320",
    distance: 950,
    intercontinental: false,
  },
]);

db.flightData.find();

// filter data
db.flightData.find({ intercontinental: true });

// greater than
db.flightData.find({ distance: { $gte: 12000 } });

// find one filter
db.flightData.findOne({ distance: { $gt: 900 } });

// update one
db.flightData.updateOne(
  { _id: ObjectId("5fa06c1b244a9533a048b6f1") },
  { $set: { delayed: true } }
);

// update many
db.flightData.updateMany(
  { _id: ObjectId("5fa06c1b244a9533a048b6f1") },
  { $set: { delayed: true } }
);

// update (dangerous!)
db.flightData.updateMany(
  { _id: ObjectId("5fa06c1b244a9533a048b6f1") },
  { delayed: true }
);

// replace one
db.flightData.replaceOne(
  { _id: ObjectId("5fa06c1b244a9533a048b6f1") },
  {
    departureAirport: "MUC",
    arrivalAirport: "SFO",
    aircraft: "Airbus A380",
    distance: 12000,
    intercontinental: true,
  }
);

// insert passengers
db.passengers.insertMany([
  {
    name: "Max Schwarzmueller",
    age: 29,
  },
  {
    name: "Manu Lorenz",
    age: 30,
  },
  {
    name: "Chris Hayton",
    age: 35,
  },
  {
    name: "Sandeep Kumar",
    age: 28,
  },
  {
    name: "Maria Jones",
    age: 30,
  },
  {
    name: "Alexandra Maier",
    age: 27,
  },
  {
    name: "Dr. Phil Evans",
    age: 47,
  },
  {
    name: "Sandra Brugge",
    age: 33,
  },
  {
    name: "Elisabeth Mayr",
    age: 29,
  },
  {
    name: "Frank Cube",
    age: 41,
  },
  {
    name: "Karandeep Alun",
    age: 48,
  },
  {
    name: "Michaela Drayer",
    age: 39,
  },
  {
    name: "Bernd Hoftstadt",
    age: 22,
  },
  {
    name: "Scott Tolib",
    age: 44,
  },
  {
    name: "Freddy Melver",
    age: 41,
  },
  {
    name: "Alexis Bohed",
    age: 35,
  },
  {
    name: "Melanie Palace",
    age: 27,
  },
  {
    name: "Armin Glutch",
    age: 35,
  },
  {
    name: "Klaus Arber",
    age: 53,
  },
  {
    name: "Albert Twostone",
    age: 68,
  },
  {
    name: "Gordon Black",
    age: 38,
  },
]);
db.passengers.find();
// from cursor to array
db.passengers.find().toArray();
db.passengers.find().forEach(p => print(p.name));

// projection
db.passengers.find({}, { name: 1 });
// exclude _id
db.passengers.find({}, { name: 1, _id: 0 });

// sub documents
db.flightData.updateMany(
  {},
  { $set: { status: { description: "On time", lastUpdate: "1 hour ago" } } }
);

// arrays
db.passengers.updateOne(
  { name: "Albert Twostone" },
  {
    $set: { hobbies: ["Sport", "Music"] },
  }
);
db.passengers.find();

// access nested array
db.passengers.find({ hobbies: "Sport" });

// access nested object
db.flightData.find({ "status.description": "On time" });

// clean up
db.dropDatabase();

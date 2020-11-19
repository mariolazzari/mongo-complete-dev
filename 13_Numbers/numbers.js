use("numbers");

// insert int32
db.numtest.insertOne({ a: 1 });
// insert double
db.numtest.insertOne({ a: 1.0 });
db.numtest.find();

db.persons.insertOne({ name: "Mario", age: 45 });
db.persons.stats();

db.persons.deleteMany({});
db.persons.insertOne({ age: 45 });
db.persons.stats().size;

db.persons.deleteMany({});
db.persons.insertOne({ age: NumberInt(45) });
db.persons.stats().size;

// exceded!
db.persons.insertOne({ age: NumberInt(55555555555555555) });
db.persons.find();

db.persons.insertOne({ age: NumberLong(55555555555555555) });
db.persons.find();

db.persons.deleteMany({});
db.persons.insertOne({ a: 0.3, b: 0.1 });
// rounded
db.persons.aggregate([{ $project: { result: { $subtract: ["$a", "$b"] } } }]);

db.persons.deleteMany({});
db.persons.insertOne({ a: NumberDecimal(0.3), b: NumberDecimal(0.1) });
db.persons.aggregate([{ $project: { result: { $subtract: ["$a", "$b"] } } }]);

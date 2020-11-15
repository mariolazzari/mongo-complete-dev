// mongoimport.exe persons.json -d contactData -c contacts --jsonArray --drop
use("contactData");
db.contacts.find({ "dob.age": { $gt: 60 } }).count();

// explain
db.contacts.explain().find({ "dob.age": { $gt: 60 } });
db.contacts.explain("executionStats").find({ "dob.age": { $gt: 60 } });

// create index
db.contacts.createIndex({ "dob.age": 1 });

// drop index
db.contacts.dropIndex({ "dob.age": 1 });

// cardinality too low
db.contacts.createIndex({ gender: 1 });
db.contacts.explain("executionStats").find({ gender: "male" });
db.contacts.dropIndex({ gender: 1 });

// compound index
db.contacts.createIndex({ "dob.age": 1, gender: 1 });
db.contacts.find({ "dob.age": 35, gender: "male" }).count();
db.contacts.explain("executionStats").find({ "dob.age": 35, gender: "male" });
// index from left to right!!!
db.contacts.explain("executionStats").find({ "dob.age": 35 }); // idx sscan
db.contacts.explain("executionStats").find({ gender: "male" }); // col scan!

// sorting
db.contacts.explain().find({ "dob.age": 35 }).sort({ gender: 1 });

// show indexes
db.contacts.getIndexes();

// unique index
db.contacts.createIndex({ email: 1 }, { unique: true });

// partial fitlers
db.contacts.createIndex(
  { "dob.age": 1 },
  { partialFilterExpression: { "dob.age": { $gt: 60 } } }
);
db.contacts.explain().find({ "dob.age": { $gt: 60 } });

// partial and unique
db.users.insertMany([{ name: "Max", email: "max@test.com" }, { name: "manu" }]);
db.users.createIndex(
  { email: 1 },
  { unique: true, partialFilterExpression: { email: { $exists: true } } }
);

// time to leave index
db.sessions.insertOne({ data: "xxxxxx", createdAt: new Date() });
db.sessions.find();
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 10 });

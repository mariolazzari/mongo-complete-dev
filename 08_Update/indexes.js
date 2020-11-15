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

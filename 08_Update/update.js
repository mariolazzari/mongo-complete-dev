//  mongoimport.exe -d user -c users users.json --jsonArray
use("users");
db.users.find();

// update one: $set does not override existing
db.users.updateOne(
  { _id: ObjectId("5fb04e9bf7c3904553dc283c") },
  {
    $set: {
      hobbies: [
        { title: "Sports", frequency: 5 },
        { title: "Coocking", frequency: 1 },
      ],
    },
  }
);

db.users.find({ "hobbies.title": "Sports" }, { name: 1, hobbies: 1, _id: 0 });

// update many
db.users.updateMany(
  { "hobbies.title": "Sports" },
  { $set: { isSporty: true } }
);
db.users.find({ isSporty: true }).count();

// update many $set
db.users.updateOne(
  { _id: ObjectId("5fb04e9bf7c3904553dc283c") },
  {
    $set: { age: 40, phone: "030 945623" },
  }
);

// increment
db.users.updateOne({ name: "Manuel" }, { $inc: { age: 1 } }})
// multiple updates
db.users.updateOne({ name: "Manuel" }, { $inc: { age: 1 }, $set: { isSporty: true } })

// min
db.users.updateOne({ name: "Chris" }, { $min: { age: 35 } })
// max 
db.users.updateOne({ name: "Chris" }, { $max: { age: 38 } })
// mul
db.users.updateOne({ name: "Chris" }, { $mul: { age: 1.1 } })

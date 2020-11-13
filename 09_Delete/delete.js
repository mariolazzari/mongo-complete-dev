use("user");

// delete one
db.users.deleteOne({ name: "Chris" });
db.users.find();

// delete many
db.users.deleteMany({ age: { $exists: false }, "hobbies.title": "Sports" });

// delete all
db.users.deleteMany({});
db.users.drop();

// drop db
db.dropDatabase();

// queries diagnosis
db.customers.insertMany([
  { name: "Max", age: 29, salary: 3000 },
  { name: "Manuel", age: 30, salary: 4000 },
]);
db.customers.createIndex({ name: 1 });
db.customers.explain().find({ name: "Max" });
// return only index value: 0 doc examined
db.customers
  .explain("executionStats")
  .find({ name: "Max" }, { name: 1, _id: 0 });

// compound idx -> winning plan
db.customers.createIndex({ age: 1, name: 1 });
db.customers.explain().find({ name: "Max", age: 30 });

// multi key index
db.contacts.createIndex({ hobbies: 1 });
db.contacts.explain().find({ hobbies: "Sports" });

// text index
db.products.insertMany([
  { title: "A book", description: "This is an awesome book!" },
  { title: "A t-shirt", description: "This t-short is really awesome!" },
]);
//db.products.createIndex({description: 1}) // -> find only exact match
// -> create tags (lowercase) from sentence, removing puntucations and non-significant
db.products.createIndex({ description: "text" });
// only one text index per collection
db.products.explain().find({ $text: { $search: "awesome" } });

// text sorting
db.products.find(
  { $text: { $search: "awesome t-shirt" } },
  { score: { $meta: "textScore" } }
);
db.products.explain().find({ $text: { $search: "awesome t-shirt" } });

// multiple text index
db.products.dropIndex("description_text");
db.products.createIndex({ title: "text", description: "text" });
db.products.insertMany([
  { title: "The Ship", description: "A book about a ship" },
]);
db.products.find({ $text: { $search: "ship" } });

// exclude word (-)
db.products.find({ $text: { $search: "awesome -book" } });

// default language
db.products.getIndexes();
db.products.dropIndex("title_text_description_text");
db.products.createIndex(
  { title: "text", description: "text" },
  { default_language: "english", weights: { title: 1, description: 10 } }
);

// Building index
db.ratings.createIndex({ age: 1 }, { background: true });

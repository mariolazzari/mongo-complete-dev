// select db
use("shop");

// insert new item
db.products.insertOne({ name: "A book", price: 9.95 });
// insert new item
db.products.insertOne({
  name: "A new t-shirt",
  price: 9.95,
  description: "This is a new t-shirt",
});
// insert new item with sub document
db.products.insertOne({
  name: "A computer",
  price: 1229.95,
  description: "This is a nice laptop.",
  details: { cpu: "i7", ram: "16GB" },
});

// show documents in collection
db.products.find();

// clean up
db.dropDatabase();

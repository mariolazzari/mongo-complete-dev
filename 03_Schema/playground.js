use("shop");

// drop prod collection
db.products.drop();

db.products.insertOne({ name: "A book", price: 9.99 });
db.products.insertOne({
  title: "A t-shirt",
  seller: { name: "Mario", age: 45 },
});
// show and reset
db.products.find();
db.products.deleteMany({});

// insert prod
db.products.insertOne({ name: "A book", price: 9.99, details: null });
db.products.insertOne({ name: "A t-shirt", price: 29.99, details: null });
db.products.insertOne({
  name: "A laptop",
  price: 1229,
  details: { cpu: "i7" },
});

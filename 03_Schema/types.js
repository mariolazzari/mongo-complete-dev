use("test");
db.dropDatabase();

use("companyData");
db.companies.insertOne({
  name: "A company",
  isStartup: true,
  employees: 33,
  funding: 12345678901234567890,
  details: { ceo: "Mario" },
  founded: new Date(),
  insertedAt: new Timestamp(),
});
db.companies.find();

// db stats
db.stats(1024);
db.companies.drop();

// number type
db.numbers.insertOne({ a: NumberInt(123) });
db.numbers.find();
db.stats(1024);
// typeof
typeof db.numbers.find().a;

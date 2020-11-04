use("hospital");

// one to one
db.patients.insertOne({ name: "Mario", age: 45, diseaseSummary: "summary-1" });
db.diseaseSummaries.insertOne({
  _id: "summary-1",
  diseases: ["cold", "broken leg"],
});
const dsId = db.patients.findOne().diseaseSummary;
db.diseaseSummaries.findOne({ _id: dsId });

// one to many7

// many to many

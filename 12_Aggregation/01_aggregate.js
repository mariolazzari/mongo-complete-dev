// Select the database to use.
use("analytics");

// match stage: filter female person only
const match = { $match: { gender: "female" } };
// group stage: group by state and sum
const group = {
  $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } },
};
// sort stage:total persons descending
const sort = { $sort: { totalPersons: -1 } };
// project stage: fields projection
//const project = {$project:{_id:0, gender:1, fullName:{$concat:["$name.first"," ","$name.last"]}}}

// execute pipeline
db.persons.aggregate([match, group, sort]);

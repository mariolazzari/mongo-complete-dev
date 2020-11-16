//mongoimport persons.json -d analytics -c persons --jsonArray

use("analytics");

// match = fund filter
db.persons.aggregate([{ $match: { gender: "female" } }, { $group: {} }]);
// group
db.persons.aggregate([
  { $match: { gender: "female" } },
  {
    $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } },
  },
]);
// sort
db.persons.aggregate([
  { $match: { gender: "female" } },
  {
    $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } },
  },
  { $sort: { totalPersons: -1 } },
]);

// project
db.persons.aggregate([
  {
    $project: {
      _id: 0,
      gender: 1,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] },
            ],
          },
          " ",
          { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
          {
            $substrCP: [
              "$name.last",
              1,
              { $subtract: [{ $strLenCP: "$name.last" }, 1] },
            ],
          },
        ],
      },
    },
  },
]);

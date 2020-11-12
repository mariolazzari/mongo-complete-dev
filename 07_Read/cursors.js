use("shows");

const cursorData = db.movies.find();
// get first element
cursorData.next();
// et second element
cursorData.next();

// for each
cursorData.forEach(doc => printjson(doc));

// has next
cursorData.hasNext();

// sort
db.movies.find().sort({ "rating.average": 1, runtime: -1 });

// skip
db.movies.find().sort({ "rating.average": 1, runtime: -1 }).skip(10);

// limit
db.movies.find().sort({ "rating.average": 1, runtime: -1 }).skip(10).limit(10);
db.movies.find().sort({ "rating.average": 1, runtime: -1 }).limit(10).skip(10);

// projection
db.movies.find({}, { name: 1, genres: 1, runtime: 1, _id: 0 });

// slice
db.movies.find(
  { "rating.average": { $gt: 9 } },
  { genres: { $slice: 2 }, name: 1 }
);
// slice and skip
db.movies.find(
  { "rating.average": { $gt: 9 } },
  { genres: { $slice: [1, 2] }, name: 1 }
);

db.movies.find(
  {
    _id: ObjectId("5faaf2179916f27e7c8d5035"),
  },
  { genres: 1 }
);

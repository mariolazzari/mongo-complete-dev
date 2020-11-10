use("shows");

// find one: find 2st matching document
db.movies.findOne();

// find: return cursor
db.movies.find();
// find filter
db.movies.find({ name: "The Last Ship" });
db.movies.find({ runtime: 60 });

// query operators
db.movies.find({ runtime: 60 });
db.movies.find({ runtime: { $eq: 60 } });
db.movies.find({ runtime: { $ne: 60 } });
db.movies.find({ runtime: { $lt: 30 } });
db.movies.find({ runtime: { $lte: 30 } });
db.movies.find({ runtime: { $gt: 30 } });
db.movies.find({ runtime: { $gte: 30 } });

// subdocument query
db.movies.find({ "rating.average": { $gt: 7 } });
// array query: equaity -> includes
db.movies.find({ genres: "Drama" });
// array equality
db.movies.find({ genres: ["Drama"] });
// in and nin
db.movies.find({ runtime: { $in: [30, 42] } });
db.movies.find({ runtime: { $nin: [30, 42] } });

// count
db.movies.find({ runtime: { $in: [30, 42] } }).count();
db.movies.find({ runtime: { $nin: [30, 42] } }).count();

// or and nor
db.movies.find({ $or: [{ runtime: { $gt: 60 } }, { runtime: { $gt: 90 } }] });
db.movies.find({ $nor: [{ runtime: { $gt: 60 } }, { runtime: { $gt: 90 } }] });
// and
db.movies.find({
  $and: [{ "rating.average": { $lt: 3 } }, { "rating.average": { $gt: 9 } }],
});
// default
db.movies.find({ "rating.average": { $gt: 9 }, genres: "Drama" });
db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Horror" }] });

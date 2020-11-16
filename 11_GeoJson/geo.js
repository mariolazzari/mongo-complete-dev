use("awesomeplaces");

db.places.insertOne({
  name: "California Accademy of Science",
  location: { type: "Point", coordinates: [-122.4660947, 37.7698646] },
});
db.places.find();

// create geo spatial index
db.places.createIndex({ localtion: "2dsphere" });

// near
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-122.4660947, 37.7698646] },
      $maxDistance: 50,
      $minDistance: 10,
    },
  },
});

db.places.insertOne({
  name: "Golden Gate Park Tennis Courts",
  location: { type: "Point", coordinates: [-122.475511, 37.7752057] },
});
db.places.find();

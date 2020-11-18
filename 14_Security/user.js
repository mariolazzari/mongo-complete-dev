use("admon");

// create user
db.createUser({
  user: "mario",
  pwd: "password",
  roles: ["userAdminAnyDatabase"],
});

// autheneticate use (in admin db)
db.auth("mario", "password");

// readWrite role
use("shop");
// create user
db.createUser({
  user: "appUser",
  pwd: "password",
  roles: ["readWrite"],
});

//mongo -u appUser -p password --authenticationDatabase shop

db.logout();

// update user
db.updateUser("appUser", {
  roles: ["shop", { role: "readWrite", db: "blog" }],
});

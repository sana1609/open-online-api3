var mysql = require('mysql');

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con;
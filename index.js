var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bears_db'
});
 
connection.connect();
 
// connection.query('SELECT name, favorite_food, personality FROM happy_bears;', function(err, rows, fields) {
//   if (err) throw err;

//   for (var i = 0; i < rows.length; i++){
//   	console.log("My name is " + rows[i].name + " , I love to eat " + rows[i].favorite_food + " and I am " + rows[i].personality + " all the time!" );
//   }
 
// });

var showBears = function(){
	connection.query("SELECT * FROM happy_bears;", function(err, rows, fields) {
		if(err) throw err;

		console.log(rows);
	});
};

var addBearName = function(){
	connection.query("INSERT INTO happy_bears (name, favorite_food, personality) VALUES (?,?,?)", ["happy", "burritos", "mad"], function(err, results) {
		if (err) throw err;

		console.log("Insert finished!!");

	})
};

var deleteBear = function(){
	var query = "DELETE FROM happy_bears WHERE id=?";
	var idToBeDeleted = process.argv[2]; //user input, user can directly change database from command line


	connection.query(query, idToBeDeleted, function(err, results){
		if(err){
			throw err;
		}
		console.log("Bear " + idToBeDeleted + " was deleted.")
	});
}

deleteBear();
// addBearName();
showBears();
 

connection.end();
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

// var showBears = function(){
// 	connection.query("SELECT * FROM happy_bears;", function(err, rows, fields) {
// 		if(err) throw err;

// 		console.log(rows);
// 	});
// };

// var addBearName = function(){
// 	connection.query("INSERT INTO happy_bears (name, favorite_food, personality) VALUES (?,?,?)", ["happy", "burritos", "mad"], function(err, results) {
// 		if (err) throw err;

// 		console.log("Insert finished!!");

// 	})
// };

// var deleteBear = function(){
// 	var query = "DELETE FROM happy_bears WHERE id=?";
// 	var idToBeDeleted = process.argv[2]; //user input, user can directly change database from command line


// 	connection.query(query, idToBeDeleted, function(err, results){
// 		if(err){
// 			throw err;
// 		}
// 		console.log("Bear " + idToBeDeleted + " was deleted.")
// 	});
// }

// deleteBear(); // runs deleteBear
// // addBearName(); // runs addBearName
// showBears(); // runs showBears 

var prompt = require('prompt');
prompt.start();

prompt.get(['first_name', 'last_name', 'age', 'time_of_siting'], function(err, result) {
    
    var report = `FBI aliens sighting report:

    Eye witness name is ${result.first_name} ${result.last_name} at age: ${result.age}
    According to eye witness sighting happened sometime around ${result.time_of_siting} near Burbank
    Another possible witness includes a person by the name of Alice
    The sighting is described as: Some monster thingy and the witness's initial thoughts are: WOAH MAN!
    This is the witness's 11th encounter

    Report conclusion: Complete`;

    console.log(report);
});
 

connection.end();


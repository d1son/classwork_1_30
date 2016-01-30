var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bears_db'
});
 
connection.connect();
 
connection.query('SELECT name, favorite_food, personality FROM happy_bears;', function(err, rows, fields) {
  if (err) throw err;

  for (var i = 0; i < rows.length; i++){
  	console.log("My name is " + rows[i].name + " , I love to eat " + rows[i].favorite_food + " and I am " + rows[i].personality + " all the time!" );
  }
 
});
 
connection.end();
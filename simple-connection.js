const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Masha',
    password: '11111',
    database: 'world'
});

connection.connect();

connection.query('SELECT * from city LIMIT 1', 
function (error, results, fields) {
    if (error) throw error;
    console.log('the solution is:', results[0].Name)
    console.log(fields);
    });

connection.end();
import app from './app.js';
import {pool} from './db.js';

app.listen(3000);
console.log("Server on port", 3000);

// pool.query("SELECT NOW()", (err, res) => {
//     app.listen(3000);
//     console.log(err,res,rows);
//     console.log("Server on port", 3000);
//     pool.end();
// });
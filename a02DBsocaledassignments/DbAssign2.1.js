const url=" ";
let dbparams=
{
    host: 'localhost',
    user: 'kunal',
    password: 'cdac',
    database: 'kunal',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("DB connection Established");

//Insert------------------------------------------------------
	 let itemno ='6';  
	 let itemname ='Book';  
	 let price ='30';  
	 let category ='Reading';

	 connection.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno,itemname,price,category], 
	 (err, res1) => {
		 if (err) {
			 console.log(err);  
		 } else {
			 console.log(res1.affectedRows)     
		   
		 }
	 }
	 );

const url = "";

let dbparams = {
  host: "localhost",
  user: "kunal",
  password: "cdac",
  database: "kunal",
  port: 3306,
};

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);
console.log("Installing MySql Module usuing npm install mysql2");
// config/dbConfig.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '43.230.202.147',
  user: 'crm_devkawal',
  password: 'nQl39(De6(~f',
  database: 'crm_legalstix',
}); 

//QeGOPNf-by2s
connection.connect((err) => {
  if (err) { 
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

module.exports = connection; 

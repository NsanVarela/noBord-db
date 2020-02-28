const mysql = require('mysql')

const dbConnect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
})

dbConnect.connect((err) => {
    !err ? console.log(`DB connecion succeded!`) : console.log('DB connecion failed \n Error :' + JSON.stringify(err, undefined, 2))
})

module.exports = dbConnect
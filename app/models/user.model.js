const sql = require("./db")

const User = function(user) {
    this.username = user.username
    this.password = user.password
    this.language = user.language
    this.type = user.type
}

User.create = (newUser, result) => {
    sql.query(`INSERT INTO Users SET ?`, newUser, (err, res) => {
        if(!err) {
            console.log(`created user: `, { id: res.insertId, ...newUser })
            result(null, {id: res.insertId, ... newUser})
        }
        else
            console.log(`error: `, err)
            result(err, null)
            return
    })
}

User.getAll = result => {
    sql.query(`SELECT * FROM Users`, (err, res) => {
        if(err) {
            console.log('error', err)
            result(null, err)
            return
        }
        console.log(`users: `, res)
        result(null, res)
    })
}

User.findUser = (user, result) => {
    console.log('user find : ', user)
    sql.query('SELECT * FROM Users WHERE password = ?',[user.password], (err, res) => {
        if(err) {
            console.log(`error: `, err)
            result(err, null);
            return
        }
    
        if(res.length) {
            console.log(`found customer: `, res[0].password);
            result(null, res[0]);
            return
        }
    
        // not found Customer with the id
        result({ kind: `not_found` }, null)
    })
}

User.updateById = (id, user, result) => {
    // const param = [ req.body, req.params.id ]
    sql.query(`UPDATE Users SET username=?, password=?, language=?, type=? WHERE id=?`, [
        user.username, 
        user.password,
        user.language,
        user.type,
        id
    ], (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: `not_found` }, null)
            return
        }

        console.log(`updated user: `, { id: id, ...user })
        result(null, { id: id, ...user })
    })
}

User.remove = (id, result) => {
    sql.query(`DELETE FROM Users WHERE id = ?`, id, (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(null, err)
            return
        }
    
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: `not_found` }, null)
            return
        }
    
        console.log(`deleted customer with id: `, id)
        result(null, res)
    })
}

User.removeAll = result => {
    sql.query(`DELETE FROM Users`, (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(null, err)
            return
        }
    
        console.log(`deleted ${res.affectedRows} users`);
        result(null, res)
    })

}

module.exports = User
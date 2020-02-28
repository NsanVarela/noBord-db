module.exports = (app) => {
    
    const users = require("../controllers/user.controller")

    app.post(`/add/user`, users.create)
    app.get(`/list/users`, users.findAll)
    app.get(`/find/user/:userId`, users.findOne)
    app.put(`/edit/user/:userId`, users.update)
    app.delete(`/delete/user/:userId`, users.delete)
    app.delete(`delete/users`, users.deleteAll)
}
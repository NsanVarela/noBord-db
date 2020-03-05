const User = require(`../models/user.model`)

// Create and save a new User
exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: `Content cannot be empty!`
        })
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        language: req.body.language,
        type: req.body.type
    })
    console.log('user back :', user)

    User.create(user, (err, data) => {
        err ? res.status(500).send({
            message: err.message || `Some error occurred while creating the User.`
        }) : res.end(JSON.stringify(data))
    })
}

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        return err ? res.status(500).send({
            message: err.message || `Some error occurred while retrieving users.`
        }) : res.end(JSON.stringify(data))
    })
}

exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if(err) {
            if(err.kind === `not_found`) {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving User with id ${req.params.userId}`
                })
            }
        } else res.send(data)
    })
}

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
        message: `Content can not be empty!`
        })
    }

    User.updateById(req.params.userId, new User(req.body), (err, data) => {
        if(err) {
            if(err.kind === `not_found`) {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                })
            } else {
                res.status(500).send({
                    message: `Error updating User with id ${req.params.userId}`
                })
            }
        } else res.send(data)
    })
}

exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if(err) {
            if(err.kind === `not_found`) {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.userId}.`
                    })
            } else {
                    res.status(500).send({
                        message: `Could not delete User with id ${req.params.userId}`
                    })
                }
            } else res.send({ message: `User was deleted successfully!` })
        })
}

exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || `Some error occurred while removing all customers.`
            })
        else res.send({ message: `All Customers were deleted successfully!` })
    })
}


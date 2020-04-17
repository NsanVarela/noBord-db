const Sequelize = require(`sequelize`)
const db = require(`../database/db.js`)

module.exports = db.sequelize.define(
    `user`,
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // first_name: {
        //     type: Sequelize.STRING
        // },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        language: {
            type: Sequelize.STRING,
            allowNull: true
        },
        type: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false
    }
)
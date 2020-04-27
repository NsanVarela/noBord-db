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
        username: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.NUMBER,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.NUMBER,
            allowNull: true
        },
        language: {
            type: Sequelize.STRING,
            allowNull: true
        },
        type: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profession: {
            type: Sequelize.STRING,
            allowNull: true
        },
        experience: {
            type: Sequelize.NUMBER,
            allowNull: true
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        skills: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false
    }
)
require(`dotenv`).config()
const express = require(`express`)
const cors = require('cors')
const app = express()
const bodyParser = require(`body-parser`)
const jwt = require(`jsonwebtoken`)

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get(`/`, (req, res) => {
    res.json({
        message: `Welcome to noBord Database API.`
    })
})

require(`./app/routes/user.routes`)(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))
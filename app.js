const express = require(`express`)
const bodyParser = require(`body-parser`)
const app = express()
app.use(bodyParser.json())

require(`dotenv`).config()

app.use(bodyParser.urlencoded({ extended: true }))

app.get(`/`, (req, res) => {
    res.json( {message: `Welcome to noBord Database API.`} )
})

require(`./app/routes/user.routes`)(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))

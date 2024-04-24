const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Running API in PORT: ${PORT}`)
)

app.get('/users', (_, res) => {
    const users = [{
        id: 1,
        name: 'Javier'
    }, {
        id: 2,
        name: 'Jimmy'
    }, {
        id: 3,
        name: 'Juan'
    }]

    res.status(200).send({
        users
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email) {
        res.status(418).send({
            message: 'Email is required'
        })
    }
    if (!password) {
        res.status(418).send({
            message: 'Password is required'
        })
    }
    res.send({
        token: `0zdf9#${email}03103490329PPOOFFF44$$$##_@#!`
    })
})
require("dotenv").config()
const express = require("express")
const app = express();
const jwt = require("jsonwebtoken")
app.use(express.json())

function authenticateUser(req, res, next) {
    const authHeader = req.headers['auth'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) res.status(401);
    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if (err) {
            res.status(401);
        }
        req.user = user;
        next()
    })
}

const POSTS = [
    {
        username: "saras",
        content: [1, 2, 3]
    },
    {
        username: "harsh",
        content: [4, 5, 6]
    }
]

app.get('/post', authenticateUser, (req, res) => {
    res.json(POSTS.filter(post => post.username == req.user.name))
})

app.post('/login', (req, res) => {
    const usernamme = req.body.username;
    const user = { name: usernamme }
    const accesTOKEN = jwt.sign(user, process.env.TOKEN);
    res.json({ token: accesTOKEN })
})

app.listen(3000, () => {
    console.log("app started on 3000 port")
})
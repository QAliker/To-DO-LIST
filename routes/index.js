const router = require("express").Router()
const Todo = require("../models/Todo")

// routes will be here ...
router.get("/", async(req, res) => {
    const allTodo = await Todo.find()
    res.render("index.ejs", {todo: allTodo})
})

router.get("/update/todo/modify", async(req, res) => {
    const todo = await Todo.find()
    res.render("update.ejs", {todo: todo} )
    
} )

module.exports = router;
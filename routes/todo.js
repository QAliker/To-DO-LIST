const router = require('express').Router()
const Todo = require("../models/Todo")





// routes
router.post("/add/todo", (req, res) => {
    const {todo, username, date} = req.body
    console.log(todo, username, date)
    const newTodo = new Todo ({todo, username, date})
    
    

    newTodo.save()
    .then(() => {console.log("To do Saved and Added")

    res.redirect("/")
})
.catch((err) => console.log(err)
);
})

.post("/update/todo", (req, res) => {
  const {todo, newTodo, username, date} = req.body
  console.log(todo, newTodo, username, date)
  return Todo.updateOne(
    {todo: todo}, {$set: {
      todo: newTodo,
      username: username,
      date: date
    }})


  .then(() =>  {
    console.log("Updated Todo sucessfully!")

    res.redirect("/");
  })
  .catch((err) => 
    console.log(err),
    );
})

.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;

    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        
        res.redirect("/");
      })
      .catch((err) => 
      console.log(err),
      );
  })

  
  
module.exports = router
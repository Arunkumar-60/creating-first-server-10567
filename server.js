const express = require("express");

//intialization

const app = express(); //called the express function , and everything related to express ,can be used inside app variable

app.use(express.json()); //application will now use json format for data


const port = 8081;
//local port number

const toDoList = ["student", "play cricket"];

//http://localhost:8081/todos
app.get("/todos", (req, res) => {
    //callback
    res.status(200).send(toDoList);
});

//http://localhost:8081/todos
app.post("/todos", (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added sucessfully",
    });
});

app.delete("/todos", (req, res) => {
    //callback
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `deleted item - ${req.body.item}`,
    })
});

// put, patch , methods thats not impelemented
app.all("/todos", (req, res) => {
    res.status(501).send();
});

//all the other routes
app.all("*", (req, res) => {
    res.status(404).send();
})


app.listen(port, () => {
    //callback
    console.log(`node.js server started on port ${port}`);
})
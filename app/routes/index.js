const express = require('express');
const router = express.Router();
const todos = [];


`localhost:3000/api/`;
router.get('/', (req, res) => {
    res.status(200).json({message: 'From the API', todos});
});

`localhost:3000/api/:id`;
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('params >>>', id)
    res.status(200).json({message: 'Id found:', id});
});

`localhost:3000/api/`
router.post("/", (req, res) => {
        console.log('Request body >>>', req.body);
        const { data } = req.body;
        todos.push(data);
        res.status(200).json({message: "We got the request", data})
});

`localhost:3000/api/:id`;
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(obj => obj.id == id);
    todos.splice(id);
    console.log('params >>>', id)
    res.status(200).json({message: "Deleted from server:", id});
});


`localhost:3000/api/:id`;
router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log('params >>>', id)
    res.status(200).json({message: 'From the API'});
});
module.exports = router;
const express = require("express");
const app = express();
const fs = require("fs")
app.use(express.json())
const cors = require("cors")
app.use(cors())

app.get("/todos", (req, res) => {
    fs.readFile("notes.json", "utf-8", (err, data) => {
        if (err) console.log(err);
        res.json(JSON.parse(data));
    })
})

app.post("/todos", (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        description: req.body.des
    };
    fs.readFile("notes.json", "utf-8", (err, data) => {
        if (err) console.log(err);
        const todos = JSON.parse(data);
        todos.push(newTodo)
        fs.writeFile("notes.json", JSON.stringify(todos), (err) => {
            if (err) console.log(err);
            res.status(200).json(newTodo);
        });
    });
})

app.delete("/todos/:id", (req, res) => {
    const del_Id = req.params.id;
    // Read the JSON file
    fs.readFile('notes.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);

            // Identify the ID of the element you want to delete
            const elementIdToDelete = del_Id;

            // Find the index of the element in the array
            const indexToDelete = jsonData.findIndex(element => element.id == elementIdToDelete);

            if (indexToDelete !== -1) {
                // Remove the element from the array
                jsonData.splice(indexToDelete, 1);

                // Convert the updated JSON data back to a string
                const updatedData = JSON.stringify(jsonData, null, 2);

                // Write the updated JSON back to the file
                fs.writeFile('notes.json', updatedData, 'utf8', err => {
                    if (err) {
                        console.error('Error writing JSON file:', err);
                        return;
                    }

                    console.log('Element deleted successfully.');
                });
            } else {
                console.log('Element not found in the array.');
            }
        } catch (error) {
            console.error('Error parsing JSON data:', error);
        }
    });

})

app.listen(3000, () => {
    console.log("Listening on 3000 port")
})
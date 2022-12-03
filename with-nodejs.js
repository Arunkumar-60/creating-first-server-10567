const http = require("http");
//package import

const port = 8081;
//local port number

const toDoList = ["student", "play cricket"];

http.createServer((req, res) => {
    const { method, url } = req;

    if (url === "/todos") {
        if (method === "GET") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(toDoList.toString());
        } else if (method === 'POST') {
            let body = "";
            req
                .on('error', (err) => {
                    console.error(err);
                })
                .on('data', (chunk) => {
                    body += chunk;
                })
                .on('end', () => {
                    body = JSON.parse(body);
                    let newToDo = toDoList;
                    newToDo.push(body.item);
                    console.log(newToDo);
                    res.writeHead(201);
                });
        }

        else if (method === "DELETE") {
            let body = '';
            req.on('error', (err) => {
                console.error(err)
            })
                .on('data', (chunk) => {
                    body += chunk;
                })
                .on('end', () => {
                    body = JSON.parse(body);
                    let deleteThis = body.item;
                    // for (let i = 0; i < toDoList.length; i++) {
                    //     if (toDoList[i] === deleteThis) {
                    //         toDoList.splice(i, 1);
                    //         //splice to delete
                    //         break;
                    //         //break to finish ,as we deleted what ever we want
                    //     }
                    // }

                    toDoList.find((element, index) => {
                        if (element === deleteThis) {
                            toDoList.splice(index, 1);
                        }
                    })

                    res.writeHead(204);

                })
        }
        else {
            res.writeHead(501);
        }

    } else {
        res.writeHead(404);
    }
})
    .listen(port, () => { //callback function
        console.log(`Nodejs server started on port ${port}`);
    });

// http.//localhost:8081 
const http = require("http");

http
    .createServer((req, res) =>{
        res.writeHead(200, {"Content-Type": "application/json"});

        if (req.url === "/product") {
            res.end(
                JSON.stringify({
                    message:"Rota de Produto",
                })
            );
        }

        if (req.url === "/user") {
            res.end(
                JSON.stringify({
                    message: "Rota de usuario"
                })
            )
        }

        res.end(
            JSON.stringify(
                {
                    message: "qualquer outra"
                }
            )
        )
    })
    .listen(4001, () => console.log("Servidor Up 4001"));
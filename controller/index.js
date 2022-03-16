const express = require ("express");

const app = express();

app.get ("/", function(req, resp){
    resp.send("Bem vindos ao meu app");
})
app.get("/contato",function(req, resp){
    resp.send("Página de contato do meu app");
})
app.get("/produto",function(req, resp){
    resp.send("Página de produto do meu app");
})

//esta sempre dever a ultima linha quando se é usado o express
app.listen(8081, function(){
    console.log("Servidor funcioando na url http://localhost:8081");
})
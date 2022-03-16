const express = require ("express");

const app = express();

//esta sempre dever a ultima linha quando se é usado o express
app.listen(8081, function(){
    console.log("Servidor funcioando na url http://localhost:8081");
})
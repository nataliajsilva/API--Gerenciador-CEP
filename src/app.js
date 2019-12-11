const express = require("express")
const mongoose = require("mongoose")
const  bodyParser  =  require ('body-parser')
const app = express()

mongoose.connect("mongodb+srv://admin:admin123@cluster0-avlbk.mongodb.net/enderecamentoPostal", {useNewUrlParser: true,
useUnifiedTopology: true});

//representação da conexão com o banco de dados
let db = mongoose.connection;

//após a conexão, caso ocorra algum erro, será logado o erro
db.on("error", console.log.bind(console, "connection error:"))

//uma vez que a conexão esteja aberta, será exebida essa mensagem
db.once("open", function () {
  console.log("conexão feita com sucesso.")
})

//rotas
const index = require("./routes/index")
const ceps = require("./routes/CEPsRoute")

app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
}) 

app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/", index)
app.use("/ceps", ceps)

module.exports = app

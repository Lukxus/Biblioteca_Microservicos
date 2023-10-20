import express from "express";
import conectaBanco from "./config/dbconnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaBanco();
conexao.on("erro", (erro) => {
    console.error("Deu ruim", erro);
});
conexao.once("open", () => {
    console.log("Conectado com sucesso.");
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo;
    res.status(200).send(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1);
    res.status(200).send(livros);
});

export default app;


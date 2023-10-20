import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarlivros);
routes.get("/livros/busca", LivroController.listarlivroPorEditora);
routes.get("/livros/:id", LivroController.listarlivroPorId);
routes.post("/livros", LivroController.inserirLivro);
routes.put("/livros/:id", LivroController.atualizarlivroPorId);
routes.delete("/livros/:id", LivroController.deletaLivro);


export default routes;
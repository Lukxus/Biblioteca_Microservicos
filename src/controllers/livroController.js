import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
    static async listarlivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao listar livros`
            })
        }

    }

    static async listarlivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao atualizar livro`
            })
        }

    }

    static async listarlivroPorEditora(req, res) {
        try {
            const editora = req.query.editora;
            const livroEncontrado = await livro.find({editora : editora});
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao encontrar livro por editora`
            })
        }

    }

    static async atualizarlivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Livro atualizado"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao buscar livro`
            })
        }

    }

    static async inserirLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "livro criado com sucesso",
                livro: livroCriado
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar livro`
            })
        }

    }

    static async deletaLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "livro deletado com sucesso",
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao deletar livro`
            })
        }

    }
}

export default LivroController;
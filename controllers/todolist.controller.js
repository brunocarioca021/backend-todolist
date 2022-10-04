const todolistService = require("../services/todolist.service");
const mongoose = require('mongoose');

const getlistAll = async (req, res) => {
    const list = await todolistService.getlistAll();
    res.send(list);
}

const getlistById = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({ message: 'Id invalido, verifique novamente as informações.' })
        return
    }
    const Tolist = await todolistService.getlistById(id);
    if (!Tolist) {
        res.status(404).send({ message: 'Tarefa do dia não encontrado' });
        return;
    }
    res.send(Tolist);
}

const createList = async (req, res) => {
    const list = req.body;
    if (!list || !list.titulo || !list.descricao || !list.status || !list.prioridade || !list.prazo) {
        res.status(400).send({ message: 'Dados incompleto,por favor complete todos os campos' })
        return;
    }
    await todolistService.createList(list)
        .then(() => {
            res.send({ message: `Tarefa do dia ${list.titulo} cadastrado com sucesso.` })
        })
        .catch((err) => {
            res.status(500).send({ message: `ERRO NO SERVIDOR ${err}` });
        })
}

const editList = async (req, res) => {
    const id = req.params.id;
    const listEdit = req.body;
    if (!listEdit || !listEdit.titulo || !listEdit.descricao || !listEdit.status || !listEdit.prioridade || !listEdit.prazo) {
        res.status(400).send({ message: 'Dados incompleto,por favor complete todos os campos' })
        return;
    }
    await todolistService.editList(id, listEdit)
        .then(() => res.send({ message: 'Atualização realizado com sucesso' }))
        .catch((err) => res.status(500).send({ message: `ERRO NO SERVIDOR ${err}` }))
}

const deleteList = async (req, res) => {
    const id = req.params.id;
    await todolistService.deleteList(id)
        .then(() => res.send({ message: 'Tarefa do dia excluido' }))
        .catch((err) => res.status(500).send({ message: `ERRO NO SERVIDOR ${err}` }))
}

module.exports = {
    getlistAll,
    getlistById,
    createList,
    editList,
    deleteList
}



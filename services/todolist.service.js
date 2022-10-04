const listTodo = require("../models/todolist");

const getlistAll = async () => {
    const list = await listTodo.find();
    return list;
};

const getlistById = async (id) => {
    const Tolist = await listTodo.findById(id)
    return Tolist;
};

const createList = async (list) => {
    return await listTodo.create(list)
}

const editList = async (id, list) => {
    return await listTodo.findByIdAndUpdate(id, list);
}

const deleteList = async (id) => {
    return await listTodo.findByIdAndDelete(id);
}

module.exports = {
    getlistAll,
    getlistById,
    createList,
    editList,
    deleteList
}

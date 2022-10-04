if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const Database = require('./database/datadb');
const TodolistRouter = require('./routes/todolist.router');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/todolist", TodolistRouter);


const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Database(db_url, db_user, db_pass, db_data);

const port = 3001;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});

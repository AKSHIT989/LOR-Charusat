const mysql = require('mysql2');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
require('dotenv').config();
const port = '3001';

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to mysql');
    }
});

db.execute('SELECT * FROM user', [], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        result.forEach((field) => {
            console.log(field);
        });
    }
});

const app = express();
app.listen(port, () => console.log(`Server running on port ${port}`) );
const express = require('express');
const server = express();
const port = 3000;
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/clothes');
const CSVtoJSON = require('csvtojson');
const FileSystem = require('fs');
server.use(bodyParser.json());


//importar csv
CSVtoJSON().fromFile('./data_base/users.csv').then( users => {
    users.map(user =>{
        let query = sequelize.query(
            `INSERT INTO users (id, username, fullname, email, phone, address, password, admin, enable)
            VALUES (:id, :username, :fullname, :email, :phone, :address, :password, :admin, :enable)`,
            {
                replacements: {
                    id:user.id,
                    username: user.username,
                    fullname: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    password: user.password,
                    admin: user.admin,
                    enable: user.enable
                }
            });
        return query.then(resp =>{
            console.log(resp)
        }) 
    })
});
CSVtoJSON().fromFile('./data_base/products.csv').then( products => {
    products.map(product =>{
        let query = sequelize.query(
            `INSERT INTO products (id, name, price, stock, enable)
            VALUES (:id, :name, :price, :stock, :enable)`,
            {
                replacements: {
                    id:product.id,
                    name: product.name,
                    price: product.price,
                    stock: product.stock,
                    enable: product.enable
                }
            });
        return query.then(resp =>{
            console.log(resp)
        }) 
    })
});

//inicia servidor
server.listen(port, () => {
    console.log('Servidor Iniciado');
});

//lista todos los users
server.get('/users', async (req, res) => {
    let usersList = await sequelize.query(
            'SELECT * FROM users', {
            type: sequelize.QueryTypes.SELECT,
        })
    res.status(200).json(usersList);
});

//lista todos los products
server.get('/products', async (req, res) => {
    let productsList = await sequelize.query(
            'SELECT * FROM products', {
            type: sequelize.QueryTypes.SELECT,
        })
    res.status(200).json(productsList);
});

//lista todos los orders
server.get('/orders', async (req, res) => {
    let ordersList = await sequelize.query(
            'SELECT * FROM orders', {
            type: sequelize.QueryTypes.SELECT,
        })
    res.status(200).json(ordersList);
});
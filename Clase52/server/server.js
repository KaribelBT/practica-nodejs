const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
let HttpStatus = require('http-status-codes');
const users = require('./models/users.js');
let myUser = new users.Users();
const accounts = require('./models/accounts.js');
let myAccount = new accounts.Accounts();

app.use(bodyParser.json());
app.use(cors());


//registro de usuarios
app.post('/users', myUser.userExist, (req, res) => {
  if (req.body.name && req.body.lastname && req.body.email && req.body.username && req.body.password) {
    let user = myUser.create(req.body.name, req.body.lastname, req.body.email, req.body.username, req.body.password)
    myAccount.create(user.id); 
    let accounts = myAccount.getAccountsByUser(user.id)
    user = myUser.addAccounts(user.id, accounts)
    res
      .status(HttpStatus.OK)
      .json(user);
  } else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .send({ error: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST) });
  };
});

//login de usuarios
app.post('/login', (req, res) => {
  const userLogged = myUser.logIn(req.body.username, req.body.password)
  if (userLogged.logged) {
    res
      .status(HttpStatus.OK)
      .send({
        id:userLogged.user.id,
        username: userLogged.user.username,
        accounts: userLogged.user.accounts
      });
  }
  else {
    res
      .status(HttpStatus.UNAUTHORIZED)
      .send({ error: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED) });
  }
});

//transferencia entre cuentas
app.post('/transfer', myUser.validAccount, (req, res) => {
  let transfer = myAccount.transfer(req.body.origAccount, req.body.destAccount, req.body.amount);
  
  if (transfer.ok) {
    res
      .status(HttpStatus.OK)
      .json(myAccount.getAccountsByUser(req.body.id))
  } else {
    switch (transfer.error) {
      case 404:
        res
          .status(HttpStatus.NOT_FOUND)
          .send({ error: HttpStatus.NOT_FOUND });
        break;
      case 412:
        res
          .status(HttpStatus.PRECONDITION_FAILED)
          .send({ error: HttpStatus.PRECONDITION_FAILED });
        break;
      default:
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: HttpStatus.INTERNAL_SERVER_ERROR });
        break;
    }
  }
})

//inicia servidor
app.listen(port, () => {
  console.log('Servidor Iniciado');
});
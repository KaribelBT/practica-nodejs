const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const users = require('./models/users.js');
myUser = new users.Users();
const jwt = require('jsonwebtoken');
const secret = 'c0ntr4señAsupersecreta*';

app.use(bodyParser.json());

//registro de usuarios
app.post('/users', myUser.userExist, (req, res) => {
  if (req.body.name && req.body.lastname && req.body.email && req.body.password) {
    let user = myUser.create(req.body.name, req.body.lastname, req.body.email, req.body.password)
    res
      .status(HttpStatus.OK)
      .json(user);
  } else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ error: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST) });
  };
});

//login de usuarios
app.post('/login', (req, res) => {
  const userLogged = myUser.login(req.body.email, req.body.password)
  if (userLogged.logged) {
    const token = jwt.sign({
      email: userLogged.user.email,
      isAdmin: userLogged.user.isAdmin,
    }, secret);
    res
      .status(HttpStatus.OK)
      .json({ token });
    return;
  } else {
    res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ error: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED) });
  }
});

// valida si el usuario tiene un token valido
function validTokenUser(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    res
      .status(HttpStatus.FORBIDDEN)
      .json({ error: HttpStatus.getStatusText(HttpStatus.FORBIDDEN) });
    return;
  }
  const token = authorizationHeader.split(" ").pop();
  const decoded = jwt.verify(token, secret);
  if (decoded) {
      req.user = decoded;
      next();
  } else {
      res
      .status(HttpStatus.FORBIDDEN)
      .json({ error: HttpStatus.getStatusText(HttpStatus.FORBIDDEN) });
  };
};

//buscar user por email y updatea
app.put('/users/:email', myUser.userNotFound, validTokenUser,  (req, res) => {
  let user = myUser.update(req.params.email, req.body.name, req.body.lastname, req.body.password);
  res
    .status(HttpStatus.OK)
    .json(user);
})

//buscar user por email y modifica propiedad admin
app.patch('/users/:email', myUser.userNotFound, validTokenUser, (req, res) => {
  let user = myUser.setAdmin(req.params.email, req.body.isAdmin);
  res
    .status(HttpStatus.OK)
    .json(user);
});

app.get('/users', validTokenUser, (req, res) => {
  let user = req.body.email
  res
    .status(HttpStatus.OK)
    .json(myUser.list(user))  
});

//inicia server
app.listen(port, () => {
  console.log('Servidor Iniciado');
});


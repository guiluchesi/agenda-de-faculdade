const express = require('express');

const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const expressValidator = require('express-validator');
const expressValidatorConfig = require('./config/express-validator');

const dotenv = require('dotenv');
dotenv.load();

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator(expressValidatorConfig));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'app', 'index.html')) );

const projetoController = require('./controllers/projetos');
app.get('/projetos', projetoController.obterTodos);
app.post('/projetos/criar', projetoController.inserir);

app.get('*', (req, res) => res.redirect('/#' + req.originalUrl));

if (app.get('env') === 'production') {
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), () =>
  console.log(`Express server listening on port ${app.get('port')}`)
);

module.exports = app;

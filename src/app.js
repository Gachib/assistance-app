const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

/* Declaramos donde estan los archivos estaticos */
app.use(express.static(path.join(__dirname, '../public')));

/* Views config*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Middleware de Rutas */
app.use('/', indexRouter);
app.use('/form', formRouter);

app.listen(PORT, () => {
    console.log(`
        Server running on port ${PORT}
        http://localhost:${PORT}
        `
    );
});
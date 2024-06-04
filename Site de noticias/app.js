const express = require('express');
const path = require('path');
const { create } = require('express-handlebars');
const app = express();
const port = 3000;

// Configurar Handlebars como motor de templates sem layout padrão
const hbs = create({ extname: '.hbs', defaultLayout: false });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Rota principal - Exibir lista de notícias
app.get('/', (req, res) => {
    const noticias = require('./data/noticias.json');
    res.render('index', { noticias: noticias });
});

// Rota para notícias individuais
app.get('/noticia/:id', (req, res) => {
    const noticias = require('./data/noticias.json');
    const noticia = noticias.find(n => n.id == req.params.id);
    if (noticia) {
        res.render('noticia', { noticia: noticia });
    } else {
        res.status(404).send('Notícia não encontrada');
    }
});

// Rota para processar o formulário
app.post('/noticia', (req, res) => {
    const noticiaId = req.body.id;
    res.redirect(`/noticia/${noticiaId}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

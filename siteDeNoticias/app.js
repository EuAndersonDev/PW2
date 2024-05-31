const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
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

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express')
const app = express()
const port = 3000

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta index APP
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

app.get('/posts', (req, res) => {
    const posts = [
        {
            titolo: "Post 1",
            contenuto: "Contenuto post 1",
            immagine: "/images/post1.jpg",
            tags: ["blog"]
        },
        {
            titolo: "Post 2",
            contenuto: "Contenuto post 2",
            immagine: "/images/post2.jpg",
            tags: ["express"]
        },
        {
            titolo: "Post 3",
            contenuto: "Contenuto post 3",
            immagine: "/images/post3.jpg",
            tags: ["node"]
        },
        {
            titolo: "Post 4",
            contenuto: "Contenuto post 4",
            immagine: "/images/post4.jpg",
            tags: ["api"]
        },
        {
            titolo: "Post 5",
            contenuto: "Contenuto post 5",
            immagine: "/images/post5.jpg",
            tags: ["server"]
        }
    ];

    res.json(posts);

})
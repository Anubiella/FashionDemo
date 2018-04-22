let express = require('express');
let app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


let backCol = "";


app.get('/', (req, res) => {
    res.render('index', {backCol: "transparent"});
});

app.get('/about', (req, res) => {
    res.render('about', {backCol: "rgb(214, 212, 205)"});
});

app.get('/clients', (req, res) => {
    res.render('clients', {backCol: "#fd553b"});
});

app.get('/projects', (req, res) => {
    res.render('projects', {backCol: "transparent"});
});

app.get('/showroom', (req, res) => {
    res.render('showroom', {backCol: "transparent"});
});

app.get('/streetware', (req, res) => {
    res.render('streetware', {backCol: "olive"});
});

app.get('/modelling', (req, res) => {
    res.render('modelling', {backCol: "#fd553b"});
});

app.get('/clubs', (req, res) => {
    res.render('clubs', {backCol: "pink"});
});

app.get('/arts', (req, res) => {
    res.render('arts', {backCol: "rgb(214, 212, 205)"});
});

app.get('*', (req, res)=>{
    res.status(404).render('404', {backCol: "transparent"});
});

app.listen(port, ()=>{
    console.log('Server is running!!!');
});


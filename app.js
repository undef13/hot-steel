const express = require(`express`);
const path = require(`path`);

const app = express();

app.use(express.static(`public`));  

const p = path.join(__dirname, "views");

app.get(`/`, (req, res) => {
    res.sendFile(p + "/index.html");
})

app.get(`/awnings`, (req, res) => {
    res.sendFile(p + "/awnings.html");
})

app.get(`/gates`, (req, res) => {
    res.sendFile(p + "/gates.html");
})

app.get(`/visors`, (req, res) => {
    res.sendFile(p + "/visors.html");
})

// app.get(`/lattice`, (req, res) => {
//     res.sendFile(p + "/lattice.html");
// })

// app.get(`/doors`, (req, res) => {
//     res.sendFile(p + "/doors.html");
// })

// app.get(`/wickets`, (req, res) => {
//     res.sendFile(p + "/wickets.html");
// })

app.listen(3000, "192.168.0.104", () => {
    console.log(`Server is running...`);
});
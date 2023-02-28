const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const nome = req.query.nome;
  const text = req.query.text;

  // Scrive Nome e Testo in coda al file di testo
  fs.appendFile('dati.txt', `${nome} : ${text}\n`, err => {
    if (err) {
      console.error(err);
      res.send('Errore durante la scrittura dei dati');
    } else {
      console.log(`I dati sono stati scritti correttamente nel file dati.txt: ${nome} : ${text}`);
      res.send('Dati ricevuti e scritti correttamente!');
    }
  });
});

app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde Docker + GitHub Actions!');
});

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}

module.exports = app;



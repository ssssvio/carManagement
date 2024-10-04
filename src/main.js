const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`API RUN IN PORT -> ${process.env.PORT}`);
});

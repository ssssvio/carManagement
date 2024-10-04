const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`api run on port ${process.env.PORT}`);
});

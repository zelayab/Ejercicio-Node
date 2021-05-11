const server = require('express');
const app = server();
app.get("/", function (req, res) {
  res.send("Hola Mundo");
});
app.listen(3000, function () {
  console.log("El servidor anda");
});
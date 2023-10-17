import app from "./src/app.js";
import db from "./src/config/dbConnect.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  db.on("error", console.log.bind(console, "Error de conexão"));

  db.once("open", () => {
    console.log("conexão com o banco feita com sucesso!");
    console.log(`Server listen in http://localhost:${port}`);
  });
});

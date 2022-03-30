import 'dotenv/config' 
import app from "./app.js";
import "./database.js";

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log("Server on port", port);
});

export default { app, server };

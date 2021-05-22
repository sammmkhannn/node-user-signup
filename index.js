import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import requets from "request";

//Import custom modules
import UserRoutes from "./app/routes/userRoutes.js";
import config from "./app/config/config.js";

//connect to mong db
mongoose.connect(config.getDBString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create a new express application and configure it

const app = express();

//configure Routes
app.use(config.API_PATH, UserRoutes);

//Start the server
app.listen(config.PORT, () => {
  console.log(`Server is listening on ${config.PORT}`);
});

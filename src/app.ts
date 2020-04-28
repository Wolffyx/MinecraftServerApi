import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import path from "path";
import routes from "./routes/routes";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
// app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//     express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// );
app.use("/", routes);
// app.use(genericErrorHandler);

// app.use(notFoundHandler);


export default app;

import express, { Application } from "express";
import { errorMiddleware } from "./middlewares/error.middleware";

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
  }
  //metodos
  initializeRoutes() {
    //this.app.use("/");
  }
  interceptionError() {
    this.app.use(errorMiddleware);
  }
  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); //text=Hello%20World
  }
  listen() {
    this.app.listen(3333, () => console.log("server is running"));
  }
}
export { App };

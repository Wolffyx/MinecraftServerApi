import { Router } from "express";


import MinecraftController from "../controllers/MinecraftController";
import HomeController from "../controllers/HomeController";


const router: Router = Router();
let minecraftController = new MinecraftController();
router.get("/", new HomeController().index);
router.get("/start", minecraftController.server);
router.get("/buffer", minecraftController.buffer);
router.get("/buffer", minecraftController.command);



export default router;

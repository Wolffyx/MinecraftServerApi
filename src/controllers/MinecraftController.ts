import {Request, Response} from "express";
import MinecraftServerService from "../services/minecraftServer.service";
import {ChildProcess} from "child_process";
import {BaseController} from "./BaseController";
import {boundClass} from "autobind-decorator";
import * as path from "path";
import * as fs from "fs";

@boundClass
export class MinecraftController extends BaseController {
    public minecraft: MinecraftServerService;

    constructor() {
        super();
        console.log(this);

        // this.server = this.bind(this);
        this.minecraft = new MinecraftServerService();
        // this.minecraft = new MinecraftServerService("test","2MB",{port:25565});
    }

    server(req: Request, res: Response) {
        // console.log(this);
        const serverPath = "G:\\Work\\Typescript\\server";
        const test = fs.readdirSync(serverPath).map(fileName => {
            return path.join(serverPath, fileName);
        });
        return res.send({
            title: req.query,
            server: this.minecraft.startServer(serverPath)
        });
    }
    buffer(req: Request, res: Response){
	    console.log(this.minecraft.getBuffer())
	    return res.send(this.minecraft.getBuffer());
    }
	command(req: Request, res: Response){
		console.log(this.minecraft.getBuffer())
		return res.send(this.minecraft.getBuffer());
	}
}

export default MinecraftController;

import { Request, Response } from "express";
import {BaseController} from "./BaseController";
import {boundClass} from "autobind-decorator";

@boundClass
export class HomeController extends BaseController {
	constructor() {
		super();
		console.log(this);
	}

	index(req: Request, res: Response) {
		return res.send({
			title: req.ip,
			server: "home"
		});
	}
}

export default HomeController;

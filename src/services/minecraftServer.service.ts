import {spawn, ChildProcess} from "child_process";
import {boundClass} from "autobind-decorator";

interface Options {
	file_name: string;
	memory: string;
	port: number;
}

@boundClass
class MinecraftServerService {
	// private options: Options;
	// private fileName: string;
	// private memory: string;
	// private server: ChildProcess;
	stdout = "";
	stderr = "";
	buffer=[];
	server: ChildProcess | any;
	constructor(options?: Options) {
		// this.options = options;
		// this.fileName = fileName;
		// this.memory = memory;
		// this.startServer();
	}

	startServer(serverPath: string) {
		// return new Promise(function (resolve, reject) {
		process.chdir(serverPath);
		const cwd = process.cwd();
		this.server = spawn("java",
			[
				"-Xms2G",
				"-Xmx2G",
				"-jar",
				"server.jar",
				"nogui"], { shell: true });
		const stdout = "", stderr = "";
		this.onData();
		this.onError();
		this.server.stdin.setDefaultEncoding("utf8");
	}
	onError(){
		this.server.stdout.on("data", this.logging);

	}
	onData(){
		this.server.stderr.on("data", this.logging);
	}
	logging(data: any) {
		data = data.toString();
		let regex = new RegExp("\\[([\\d:]+) (\\w+)\\]:? ?([\\w -\\[\\]\\\\:]+)?");
		let buffer = data.match(regex);
		console.log(data);
		// @ts-ignore
		this.buffer.push(buffer);
		// console.log(data.toString());
		process.stdout.write(data);
		// return data.toString();
	}
	getBuffer(){
		return this.buffer;
	}
}

export default MinecraftServerService;

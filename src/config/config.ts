import * as dotenv from "dotenv";

// import app from "../../package.json";
import errors from "../resources/lang/errors";

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === "test";

export default {
	errors,
	name: process.env.APP_NAME,
	version: process.env.APP_VERSION,
	host: process.env.APP_HOST || "127.0.0.1",
	environment: process.env.NODE_ENV || "development",
	appUrl: process.env.APP_URL || "http://localhost:3000",
	port: (isTestEnvironment ? process.env.TEST_APP_PORT : process.env.APP_PORT) || "3000",
	pagination: {
		page: 1,
		maxRows: 20
	},
};

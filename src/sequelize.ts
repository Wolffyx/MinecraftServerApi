import {Sequelize} from "sequelize-typescript";

export const sequelize = new Sequelize("minecraft_server","minecraft","1234qwer",{
	host:process.env.DB_HOST,
	dialect: "mysql",
	storage: ":memory:",
 	models: ["./models"]
});

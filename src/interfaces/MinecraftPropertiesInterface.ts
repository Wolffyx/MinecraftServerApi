
interface MinecraftPropertiesInterface {
	settings: {
		javaHome: string,
		javaPath: string,
		minecraftDirectory: string,
		serverJar: string,
		memory: {
			minimum: number,
			maximum: number,
			units: string
		},
		backups: {
			path: any,
			numToKeep: number
		}
	},
	settingsFileName: string,
	acceptedEula: boolean,
	allowedCommands: any,
	backupList: any,
	bannedIps: any,
	bannedPlayers: any,
	detectedVersion: any,
	eulaFound: boolean,
	eulaUrl: string,
	fullHelp: any,
	helpPages: number,
	installed: boolean,
	installedVersions: any,
	ipAddress: any,
	needsInstallation: boolean,
	ops: any,
	osType: any,
	playerInfo: {players: any, summary: string},
	serverOutput: any,
	serverOutputCaptured: boolean,
	serverProperties: any,
	serverProcess: any,
	started: boolean,
	starting: boolean,
	startTime: any,
	stopping: boolean,
	stopped: boolean,
	updateAvailable: boolean,
	userCache: any,
	versions: {
		installed: any,
		latest: any,
		release: any,
		snapshot: any
	},
	whitelist: any,
	worldName: string,
}

const { existsSync, readFileSync } = require("node:fs");

module.exports.GetIgnorePatterns = function GetIgnorePatterns(configDir = "") {
	let path = configDir + ".eslintignore";
	if (!existsSync(path)) {
		console.warn("WARNING: did not find .eslintignore");
		path = configDir + ".gitignore";
		if (existsSync(path)) {
			// console.log("adding .eslint ignorePatterns using .gitignore");
			const file = readFileSync(path, "utf8");
			// split lines regardless of os - ie windows \r\n unix \n or mac \r - Ref: https://stackoverflow.com/a/18907200/1370984
			// trim
			// ignore empty lines and comments (ie #)
			const ignorePatterns = Array.from(
				new Set(
					file
						.split(/\r\n?|\n/)
						.map((x) => x.trim())
						.filter((l) => l !== "" && !l.startsWith("#"))));
			console.log("FIX: setting eslint's ignorePatterns to ", ignorePatterns);
			return ignorePatterns;
		}
	}
};

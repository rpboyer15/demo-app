module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"extends": ["6river/typescript", "plugin:import/typescript", "prettier"],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"project": ["./tsconfig.json"]
	},
	"plugins": ["@typescript-eslint"],
	"rules": {
		"6river/new-cap": "off"
	}
}

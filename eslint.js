module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
 	ecmaVersion: 6,
	sourceType: "module",
	ecmaFeatures: {
	  impliedStrict: true	
	}
  },
  rules: {
 	"no-console": "off",
	"no-unused-vars": [
	  "error", {
	 	vars: "local",
		args: "none"
	  }	
	],
	"no-alert": "error",
	"no-eq-null": "error",
	"no-eval": "error",
	"no-extend-native": "error",
	"no-multi-spaces": "error",
	"no-proto": "error",
	"no-with": "error",
	"wrap-iife: ["error", "any"],
	"no-new-require":"error",
	"new-cap": ["error", {
	  newIsCap: true,
	  capIsNew: false
	},
	"no-ternary": "error",
	"no-confusing-arrow": "error",
	"prefer-template": "error"
  },
  env: {
  	node: true
  }
}

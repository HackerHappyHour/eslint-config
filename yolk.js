module.exports = {
  extends: './eslint',
  globals: {
 	h: true 
  },
  parserOptions: {
 	ecmaFeatures: {
	  jsx: true	
	} 
  },
  env: {
 	browser: true 
  }
}

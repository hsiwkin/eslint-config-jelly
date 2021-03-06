module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		indent: ['error', 'tab']
	}
};

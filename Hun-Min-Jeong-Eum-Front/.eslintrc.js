module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-dom',
		'import'
	],
	'rules': {
		'indent': [
			'error',
			'2'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-var': [
			'error'
		],
		'no-unused-vars': [
			'warn'
		],
		'prefer-const': [
			'warn'
		],
		'prefer-arrow-callback': [
			'error'
		],
		'eqeqeq': [
			'error'
		],
		'space-infix-ops': [
			'error'
		],
		'comma-spacing': [
			'error'
		],
		'brace-style': [
			'error'
		],
		'curly': [
			'error'
		],
		'no-multiple-empty-lines': [
			'error'
		],
		'operator-linebreak': [
			'error'
		],
		'block-spacing': [
			'error'
		],
		'comma-dangle': [
			'error'
		],
		'comma-style': [
			'error'
		],
		'func-call-spacing': [
			'error'
		],
		'new-parens': [
			'error'
		],
		'space-before-function-paren': [
			'error'
		],
		'keyword-spacing': [
			'error'
		]
	}
};
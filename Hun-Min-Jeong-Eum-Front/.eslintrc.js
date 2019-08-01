module.exports = {
	'env': {
		'node': true,
		'commonjs': true,
		"browser": true,
		"es6": true
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
		'import'
	],
	'rules': {
		"react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/react-in-jsx-scope": 1,
		'indent': [
			'error',
			2
		],
		"react/jsx-indent": [
      "error",
      2
    ],
    "react/jsx-indent-props": [
      "error",
      2
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
		'no-console': 'off',
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
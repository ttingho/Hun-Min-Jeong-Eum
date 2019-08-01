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
			'warn',
			2
		],
		"react/jsx-indent": [
      "warn",
      2
    ],
    "react/jsx-indent-props": [
      "warn",
      2
    ],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'always'
		],
		'no-console': [
			'warn'
		],
		'no-var': [
			'warn'
		],
		'no-unused-vars': [
			'warn'
		],
		'prefer-const': [
			'warn'
		],
		'prefer-arrow-callback': [
			'warn'
		],
		'eqeqeq': [
			'warn'
		],
		'space-infix-ops': [
			'warn'
		],
		'comma-spacing': [
			'warn'
		],
		'brace-style': [
			'warn'
		],
		'curly': [
			'warn'
		],
		'no-multiple-empty-lines': [
			'warn'
		],
		'operator-linebreak': [
			'warn'
		],
		'block-spacing': [
			'warn'
		],
		'comma-dangle': [
			'warn'
		],
		'comma-style': [
			'warn'
		],
		'func-call-spacing': [
			'warn'
		],
		'new-parens': [
			'warn'
		],
		'space-before-function-paren': [
			'warn'
		],
		'keyword-spacing': [
			'warn'
		]
	},
	"parser": "babel-eslint"
};
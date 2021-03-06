var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, "node_modules", "./app/components"],
		alias: {
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				//?presets[]=react,presets[]=es2015,presets[]=stage-0 - past after babel-loader to solve error
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				exclude: /(node_modules|bower_components)/,
			}
		]
	},
	// sassLoader: {
	// 	includePaths: [
	// 		path.resolve(__dirname, './node_modules/foundation-sites/scss')
	// 	]
	// },
	devtool: 'cheap-module-eval-source-map'
};

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/Base.html',
	filename: '/new_base.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/To-Do/code.js',
	module: {
		loaders: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
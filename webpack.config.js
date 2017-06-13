var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
	// 配置入口
	entry: {
		'/js/index': __dirname +'/origin/js/origin.js',
		'/css/index': __dirname +'/origin/js/css.js'
	},
	// 编译后的文件路径
	output: {

		path: __dirname +'/app', // 文件路径
		filename: '[name].js' // 文件名称
	},
	module: {
		// 编译规则
		loaders: [
			// 配置sass编译规则
			{
				test:/\.sass$/,
				loader:ExtractPlugin.extract(
					{ 
						fallback: 'style-loader', 
						use: 'css-loader!sass-loader' 
					}
				)
			},
			//用来解析vue的组件，.vue后缀的文件
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				// 让webpack去验证文件是否是.js结尾将其转换
				test: /\.js$/,
				// 通过babel转换
				loader: 'babel-loader',
				// 不用转换的node_modules文件夹
				exclude: /node_modules/,
				query: {
					'presets': ['es2015', 'stage-0'],
					'plugins': ['transform-runtime']
				}
			},
		]
	},
	// 辅助的插件
	plugins:[
		new BrowserSyncPlugin({
			host:'localhost', // 实时监听，webpack -w 可以实时更新硬盘中的文件js，css
			port:8080,
			file:'',
			server:{
				baseDir:'./app' // localhost地址对应的文件目录
			}
		}),
		new ExtractPlugin('[name].css')
	]
}
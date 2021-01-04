const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
					{
						test: /\.tsx?$/,
						exclude: /node_modules/,
						use: "ts-loader",
					}
				]
	},
	resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
	devtool: 'source-map',
	mode: 'development'
}

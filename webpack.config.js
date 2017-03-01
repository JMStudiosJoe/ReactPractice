var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/build"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".tsx"]
    },

    module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				exclude: /(node_modules|__tests__)/
			}
		]
	},

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals(), "node_modules"]

};

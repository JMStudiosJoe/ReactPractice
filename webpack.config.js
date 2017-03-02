var path = require('path');
var webpack = require('webpack');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

module.exports = [{
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/build"
    },


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {

        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]

    },

    module: {
        loaders: [

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.js?$/,
                include: path.join(__dirname, '/node_modules'),
                loader: 'babel-loader?cacheDirectory',
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"

    },

}];

/*,
,
{
    name: 'dependencies',
    entry: '/',
    target: 'node',
    output: {
            path: __dirname + '/public',
            filename: 'dependencies.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: path.join(__dirname, '/node_modules'),
                loader: 'babel-loader?cacheDirectory',
            }
        ]
    }

}

*/

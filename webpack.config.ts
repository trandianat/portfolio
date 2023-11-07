const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: {
            dependOn: 'shared',
            import: path.join(__dirname, "src", "index.tsx") // or "./src/index.tsx"
        },
        projects: {
            dependOn: 'shared',
            import: './src/pages/projects/index.tsx'
        },
        shared: ['@emotion/react', 'aws-amplify']
    },
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.join(__dirname, "build"),
        publicPath: "/"
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    devServer: { static: path.join(__dirname, "src"), historyApiFallback: true },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] ,
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.jpg$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            favicon: "./src/assets/favicon.ico",
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: { chunks: 'all' } // Splits common dependencies into chunks
    },
};
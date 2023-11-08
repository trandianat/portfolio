const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getNodeModulesRegExp = (deps: string[]) => new RegExp(`[\\/]node_modules[\\/]${deps.join('|')}`);
const excludeNodeModulesRegExp = (deps: string[]) => new RegExp(`[\\/]node_modules[\\/](?!(${deps.join('|')})).*`);

const awsCacheGroupDeps = ['@aws-amplify', '@aws-crypto', '@aws-sdk', 'amazon-cognito-identity-js/es'];
const reactCacheGroupDeps = ['react', 'react-dom']; 
const tensorflowCacheGroupDeps = ['@tensorflow-models/coco-ssd', '@tensorflow/tfjs-backend-cpu', '@tensorflow/tfjs-backend-webgl'];
const vendorCacheGroupDeps = [
    ...awsCacheGroupDeps,
    ...reactCacheGroupDeps,
    ...tensorflowCacheGroupDeps,
];

const AwsCacheGroup = { name: 'aws', test: getNodeModulesRegExp(awsCacheGroupDeps) };
const ReactCacheGroup = { name: 'react', test: getNodeModulesRegExp(reactCacheGroupDeps) };
const TensorflowCacheGroup = { name: 'tensorflow', test: getNodeModulesRegExp(tensorflowCacheGroupDeps) };
const VendorCacheGroup = { name: 'vendor', test: excludeNodeModulesRegExp(vendorCacheGroupDeps) };
const cacheGroups = {
    aws: AwsCacheGroup,
    tensorflow: TensorflowCacheGroup,
    react: ReactCacheGroup,
    vendor: VendorCacheGroup,
};

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"), // or "./src/index.tsx"
    output: {
        clean: true,
        filename: "[name].[contenthash].js",
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
        splitChunks: {
            chunks: 'all', // Splits common dependencies into chunks
            cacheGroups: {
                [cacheGroups.aws.name]: cacheGroups.aws,
                [cacheGroups.react.name]: cacheGroups.react,
                [cacheGroups.tensorflow.name]: cacheGroups.tensorflow,
                [cacheGroups.vendor.name]: cacheGroups.vendor,
              },
        }
    },
};
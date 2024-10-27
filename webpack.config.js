// webpack.config.js
const path = require('path');

module.exports = {
    entry: './index.js', // Adjust the entry point as needed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'WileycDesignSystem',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
                exclude: [/\.test\.(js|ts)$/, /\.stories\.(js|ts)$/],
            },
            {
                test: /\.css$/,
                exclude: [/\.module\.css$/, /\.test\.(js|ts)$/, /\.stories\.(js|ts)$/],
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: [/node_modules/, /\.test\.(js|ts)$/, /\.stories\.(js|ts)$/],
                use: {
                    loader: 'babel-loader',
                },
            },
            // other rules...
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
    // other configurations...
};
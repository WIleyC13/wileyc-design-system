// webpack.config.js
module.exports = {
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
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // other rules...
        ],
    },
    // other configurations...
};
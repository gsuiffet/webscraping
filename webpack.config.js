module.exports = {
    entry: './public/app.js',
    output: { path: __dirname+'/public/dist', filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            }
        ]
    }
};
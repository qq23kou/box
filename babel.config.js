module.exports = {
    presets: [
        '@vue/app'
    ],
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader"
}

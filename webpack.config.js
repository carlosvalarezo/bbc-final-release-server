/**
 * Created by carlos-valarezo on 27/04/2016.
 */
const webpack = require('webpack');

module.exports={
    entry:{app:['./js/app/app.js']},
    output:
    {
        path: './bin',
        filename: "bundle.js"
    },
    module:
    {
        loaders:[{test:/\.js$/, exclude: /node_modules/, loader:'babel-loader?presets[]=es2015&presets[]=react'}]
    }
};


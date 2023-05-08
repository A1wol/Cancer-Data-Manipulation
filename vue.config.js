module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/Cancer-Data-Manipulation/" : "/",
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('csv')
            .test(/\.csv$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end(),

            config.module.rule('data')
                .test(/\.data$/)
                .use('raw-loader')
                .loader('raw-loader')
                .end()
    },

    transpileDependencies: [
        'vuetify'
    ],

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
}

module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
            autoprefixer: {
                browsers: ["Android >= 4.0", "iOS >= 8"],
                flexbox: "no-2009",
            },
            stage: 3,
        }),
        require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ["*"],
        }),
    ],
};

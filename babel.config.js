module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ];
    const plugins = [
        "rewire"
    ];

    return {
        presets,
        plugins
    };
}

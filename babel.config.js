const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: true,
        esmodules: true
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = {
  presets
};
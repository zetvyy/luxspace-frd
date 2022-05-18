module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env"),
      ],
    },
  },
};

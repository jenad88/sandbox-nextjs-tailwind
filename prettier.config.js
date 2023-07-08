const config = {
  trailingComma: "all",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  arrowParens: "always",
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require("prettier-plugin-tailwindcss")],
};

module.exports = config;

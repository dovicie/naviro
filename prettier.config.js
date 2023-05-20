// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  importOrder: [
    "^@core/(.*)$",
    "",
    "^@server/(.*)$",
    "",
    "^@ui/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};

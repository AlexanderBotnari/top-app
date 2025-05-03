import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-empty-interface": "off", // Dezactivează regula pentru interfețe goale
      "@typescript-eslint/no-empty-object-type": "off", // Dezactivează regula pentru tipuri de obiecte goale
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off", // Dezactivează regula pentru dependențele hook-urilor React
      "react/display-name": "off", // Dezactivează regula pentru numele de display ale componentelor React
      "@typescript-eslint/no-unused-expressions": "off", // Dezactivează regula pentru expresiile neutilizate în TypeScript
    },
  },
];

export default eslintConfig;

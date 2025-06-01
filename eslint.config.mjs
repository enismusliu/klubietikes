import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    rules: {
      // 1) Disable the “no <img>” warning (Next.js’s @next/next/no-img-element)
      "@next/next/no-img-element": "off",

      // 2) Disable unescaped-entities in JSX (react/no-unescaped-entities)
      "react/no-unescaped-entities": "off",

      // 3) Turn off missing-deps for React Hooks (react-hooks/exhaustive-deps)
      //    (Be careful: disabling this can mask legitimate dependency bugs.)
      "react-hooks/exhaustive-deps": "off",

      // 4) Turn off missing-alt text errors for <img> (jsx-a11y/alt-text)
      "jsx-a11y/alt-text": "off",
    },
  }),
];

export default eslintConfig;

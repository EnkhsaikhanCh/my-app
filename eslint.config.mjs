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
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/components/ui",
    ],
  },
  {
    rules: {
      // Clean Code: Naming conventions
      camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],

      // Clean Code: Code quality
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-alert": "warn",
      "no-unused-vars": "off", // TypeScript handles this
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Clean Code: Functions
      "max-params": ["warn", 4],
      "prefer-arrow-callback": "warn",
      "arrow-body-style": ["warn", "as-needed"],

      // Clean Code: Error handling
      "no-throw-literal": "error",
      "@typescript-eslint/no-floating-promises": "off", // Can be strict for async

      // TypeScript best practices
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": "off",

      // React best practices
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": "warn",
      "react/jsx-boolean-value": ["warn", "never"],
      "react/jsx-no-target-blank": "error",
      "react/no-array-index-key": "warn",
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js specific
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",

      // Import organization
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // General best practices
      "no-var": "error",
      "prefer-const": "warn",
      "prefer-template": "warn",
      "object-shorthand": "warn",
      "no-nested-ternary": "warn",
      "no-duplicate-imports": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],

      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "warn",
    },
  },
];

export default eslintConfig;

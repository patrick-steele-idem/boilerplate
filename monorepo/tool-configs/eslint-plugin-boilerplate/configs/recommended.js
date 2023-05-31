module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    // project: "./tsconfig.json",
  },
  plugins: ["import", "react", "react-hooks", "@typescript-eslint", "jest", "prettier"],
  rules: {
    /* plugin:import */
    "import/first": "error",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "off",
    "import/no-self-import": "error",
    "import/no-unresolved": "off", // Not needed since TypeScript checks imports
    "import/no-useless-path-segments": "error",

    /* eslint */
    "array-callback-return": "warn",
    camelcase: "error",
    curly: "error",
    "default-case": "error",
    "dot-notation": "error",
    eqeqeq: "off",
    "func-names": "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "warn",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-console": "error",
    "no-else-return": "off",
    "no-eval": "error",
    "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }],
    "no-implicit-coercion": "warn",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-multi-assign": "error",
    "no-new": "warn",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-proto": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-useless-return": "off",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    radix: "error",
    "require-atomic-updates": "warn",
    "spaced-comment": "error",

    /* plugin:react */
    "react/react-in-jsx-scope": "off", // We are using the react-jsx runtime that auto-imports React
    "react/button-has-type": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-danger": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/prop-types": "off", // TS makes this irrelevant
    "react/self-closing-comp": "error",
    "react/state-in-constructor": ["error", "never"],

    /* plugin:react jsx specific */
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-handler-names": "warn",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-wrap-multilines": "error",

    /* plugin:react-hooks */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    /* plugin:jest */
    "jest/consistent-test-it": ["error", { fn: "it" }],

    /* plugin:@typescript-eslint */
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/consistent-type-imports": "error",
    // defined in overrides
    "@typescript-eslint/explicit-function-return-type": "off",
    // defined in overrides
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-invalid-void-type": "warn",
    // "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    // "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-enum-initializers": "error",
    // "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "warn",

    /* plugin:@typescript-eslint extension rules */
    "@typescript-eslint/default-param-last": "error",
    // "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-shadow": ["error", { hoist: "all" }],
    // "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "off", // TypeScript handles this (see: https://www.typescriptlang.org/tsconfig#noUnusedLocals)
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",

    /* plugin:prettier */
    "prettier/prettier": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "warn",
      },
    },
  ],
  settings: {
    "import/ignore": ["react"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".mts"],
    },
    react: {
      version: "detect",
    },
    jest: {
      version: "detect",
    },
  },
};

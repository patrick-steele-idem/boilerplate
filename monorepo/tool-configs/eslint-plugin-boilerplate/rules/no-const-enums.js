module.exports = {
  meta: {
    docs: {
      description: "disable typescript const enums",
      category: "Possible Errors",
      recommended: false,
    },
    schema: [],
  },
  create(context) {
    return {
      TSEnumDeclaration(node) {
        if (node.const) {
          context.report({
            node: node,
            message: "const enums are not allowed - causes page failures in live environments",
          });
        }
      },
    };
  },
};

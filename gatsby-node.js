// Replace react-cover-carousel with a dummy module
// during gatsby build process, because this package
// expect `window` to be defined.

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-cover-carousel/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

import GeneralBlockComponent from "./blocks/general";
export { default as GeneralBlockComponent } from "./blocks/general";

export interface WebpackConfig {
  entry: string;
  output: {
    path: string;
    fileName: string;
  };
  resolve: string[];
}

const WebpackConfigPack = {
  displayName: "Webpack config pack",
  description: "Webpack configuration block",
  blocks: [
    {
      // would be provided with props
      // Props would be
      // - onChangeHandler() will trigger whenever the state changes
      // - state - the state of the block. Options. Falls back to internal default state.
      component: GeneralBlockComponent
    }
  ],
  // builds the code by getting the state
  // state would be an object with keys as block name and value as the state
  onFinalize({ entry, output: { path, fileName }, resolve }: WebpackConfig) {
    const webpackConfigCode = `
      module.exports = {
        entry: ${entry},
        output: {
          path: ${path},
          fileName: ${fileName}
        },
        resolve: [${resolve.join(",")}]
      };
    `;

    return {
      "webpack.config.js": webpackConfigCode
    };
  }
};

export default WebpackConfigPack;

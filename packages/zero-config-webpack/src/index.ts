import untag from "untag";
import WebpackIcon from "./webpack-icon.svg";
import BasicConfigBlock from "./blocks/general";
import BabelConfigBlock from "./blocks/babel";
import TypescriptConfigBlock from "./blocks/typescript";

export interface WebpackConfig {
  entry: string;
  output: {
    path: string;
    fileName: string;
  };
  resolve: string[];
  module: {
    rules: {
      babel: {
        supportTypescript: boolean;
      };
    };
  };
}

const WebpackConfigPack = {
  id: "extensions.webpack",
  displayName: "Webpack configuration pack",
  description: "Blocks for configuring webpack",
  Icon: WebpackIcon,
  blocks: [BasicConfigBlock, BabelConfigBlock, TypescriptConfigBlock],
  getInitialState() {
    return {
      entry: "./src/index.js",
      output: {
        path: "./build",
        fileName: "main.js"
      },
      resolve: [".js", ".jsx"],
      module: {
        rules: {
          babel: {
            supportTypescript: false
          }
        }
      }
    } as WebpackConfig;
  },
  // builds the code by getting the state
  // state would be an object with keys as block name and value as the state
  onFinalize({ entry, output: { path, fileName }, resolve }: WebpackConfig) {
    const webpackConfigCode = untag`
      const path = require('path');

      module.exports = {
        entry: '${entry}',
        output: {
          path: path.resolve('${path}'),
          fileName: '${fileName}'
        },
        resolve: [${resolve.map(item => `'${item}'`).join(",")}]
      };
    `;

    const packageJson = {
      scripts: {
        start:
          "webpack-dev-server --env.development --config ./webpack.config.js",
        build: "webpack --env.production --config ./webpack.config.js"
      },
      devDependencies: {
        webpack: "^4.17.1",
        "webpack-cli": "^3.1.0",
        "webpack-dev-server": "^3.1.5"
      }
    };

    const indexJS = untag`
    console.log('Hello world');
    `;

    return {
      files: {
        "webpack.config.js": webpackConfigCode,
        "src/index.js": indexJS
      },
      packageJson
    };
  }
};

export default WebpackConfigPack;

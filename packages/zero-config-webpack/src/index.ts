import untag from "untag";
import WebpackIcon from "./webpack-icon.svg";
import BasicConfigBlock from "./blocks/general";
import BabelConfigBlock from "./blocks/babel";
import TypescriptConfigBlock from "./blocks/typescript";
import CSSConfigBlock from "./blocks/css";
import FontsConfigBlock from "./blocks/fonts";

export interface WebpackConfig {
  entry: string;
  output: {
    path: string;
    fileName: string;
  };
  resolve: string[];
  babel: {
    enabled: boolean;
  };
  typescript: {
    enabled: boolean;
  };
  css: {
    enabled: boolean;
    module: boolean;
  };
  sass: {
    enabled: boolean;
  };
  fonts: {
    enabled: boolean;
  };
  images: {
    enabled: boolean;
  };
}

const WebpackConfigPack = {
  id: "extensions.webpack",
  displayName: "Webpack configuration pack",
  description: "Blocks for configuring webpack",
  Icon: WebpackIcon,
  blocks: [
    BasicConfigBlock,
    BabelConfigBlock,
    TypescriptConfigBlock,
    CSSConfigBlock,
    FontsConfigBlock
  ],
  getInitialState() {
    return {
      entry: "./src/index.js",
      output: {
        path: "./build",
        fileName: "main.js"
      },
      resolve: [".js", ".jsx"],
      babel: {
        enabled: true
      },
      typescript: {
        enabled: true
      },
      css: {
        enabled: true,
        module: false
      },
      sass: {
        enabled: true
      },
      fonts: {
        enabled: true
      },
      images: {
        enabled: true
      }
    } as WebpackConfig;
  },
  // builds the code by getting the state
  // state would be an object with keys as block name and value as the state
  onFinalize({
    entry,
    output: { path, fileName },
    resolve,
    babel,
    css,
    fonts
  }: WebpackConfig) {
    const webpackConfigCode = untag`
      const path = require('path');

      module.exports = {
        entry: '${entry}',
        output: {
          path: path.resolve('${path}'),
          fileName: '${fileName}'
        },
        resolve: [${resolve.map(item => `'${item}'`).join(",")}],
        module: {
          rules: [
            ${babel.enabled &&
              `{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
              }`}
              ${css.enabled &&
                `{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }`}
              ${fonts.enabled &&
                `{
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 50000
                  }
                }
              }`}
          ]
        }
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
        "webpack-dev-server": "^3.1.5",
        ...(css.enabled && {
          "style-loader": "^0.23.0",
          "css-loader": "^1.0.0"
        }),
        ...(fonts.enabled && {
          "url-loader": "^1.1.1"
        })
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

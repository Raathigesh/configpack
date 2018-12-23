import untag from "untag";

interface PackageFragment {
  scripts?: { [key: string]: string };
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
}

export function getScripts(fragments: PackageFragment[]) {
  const scripts = fragments
    .filter(fragment => fragment.scripts)
    .map(fragment => fragment.scripts)
    .reduce((acc, cur) => {
      return {
        ...acc,
        ...cur
      };
    }, {});
  return JSON.stringify(scripts);
}

export function generate(fragments: PackageFragment[]) {
  return untag`
    {
        "name": "zero-config-server",
        "version": "0.1.0",
        "main": "index.js",
        "license": "MIT",
        "scripts": ${getScripts(fragments)},
        "devDependencies": {
          "@babel/plugin-syntax-dynamic-import": "^7.0.0",
          "cross-env": "^5.2.0",
          "inter-ui": "^3.0.0",
          "nodemon": "^1.18.3",
          "prettier": "^1.14.2",
          "rimraf": "^2.6.2",
          "ts-node": "^7.0.1",
          "typescript": "^3.2.1",
          "ws": "^6.1.2"
        }
      }
    `;
}

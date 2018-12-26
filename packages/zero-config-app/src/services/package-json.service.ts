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

export function getDependencies(
  fragments: PackageFragment[],
  mapper: (fragment: PackageFragment) => any
) {
  const scripts = fragments
    .filter(mapper)
    .map(mapper)
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
        "devDependencies": ${getDependencies(
          fragments,
          fragment => fragment.devDependencies
        )},
        "dependencies": ${getDependencies(
          fragments,
          fragment => fragment.dependencies
        )}
      }
    `;
}

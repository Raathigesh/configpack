import { ExtensionPack, EnabledBlock } from "../types";
import { generate } from "../services/package-json.service";

export const getExtensionById = (id: string, extensions: ExtensionPack[]) =>
  extensions.find(ext => ext.id === id);

export const getFiles = (
  activeBlocks: EnabledBlock[],
  availableExtensions: ExtensionPack[],
  extensionState: { [id: string]: any }
) => {
  let files = {};
  const uniqueActiveExt = new Set(activeBlocks.map(block => block.extensionId));
  const packageFragments = [];

  for (const extId of uniqueActiveExt) {
    const ext = getExtensionById(extId, availableExtensions);

    if (ext) {
      const state = extensionState[extId];
      const result = ext.onFinalize(state);

      if (result.packageJson) {
        packageFragments.push(result.packageJson);
      }

      files = {
        ...files,
        ...result.files
      };
    }
  }

  files = {
    ...files,
    "package.json": generate(packageFragments)
  };

  return files;
};

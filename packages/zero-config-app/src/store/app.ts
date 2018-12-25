import { useState } from "react";
import { EnabledBlock, BlockItem, ExtensionPack } from "../types";
import extensionState from "./extensions";
import { generate } from "../services/package-json.service";

export function app() {
  const [enabledBlocks, setEnabledBlocks] = useState<EnabledBlock[]>([]);
  const [activeFile, setActiveFile] = useState<string>("");
  const {
    extensions,
    addExtenion,
    extensionsState,
    updateExtensionState,
    getExtentionByKey
  } = extensionState();

  const addBlock = (extensionKey: string, block: BlockItem) => {
    setEnabledBlocks(prevEnabledBlocks => [
      ...prevEnabledBlocks,
      {
        ...block,
        extensionKey
      }
    ]);
  };

  const getFiles = () => {
    return enabledBlocks.reduce(
      (acc, block: EnabledBlock) => {
        const extenionPack = getExtentionByKey(block.extensionKey);
        let result: any = {};
        if (extenionPack && extensionsState[block.extensionKey]) {
          result = extenionPack.onFinalize(extensionsState[block.extensionKey]);
        }
        return {
          ...acc,
          ...result.files
        };
      },
      {
        "package.json": generate(
          enabledBlocks
            .filter(block => block.packageJson)
            .map(block => block.packageJson)
        )
      }
    );
  };

  return {
    extensions,
    enabledBlocks,
    extensionsState,
    addExtenion,
    updateExtensionState,
    activeFile,
    setActiveFile,
    addBlock,
    getFiles
  };
}

import { useState } from "react";
import { EnabledBlock, BlockItem, ExtensionPack } from "../types";
import extensionState from "./extensions";

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
    setEnabledBlocks([
      ...enabledBlocks,
      {
        ...block,
        extensionKey
      }
    ]);
  };

  const getFiles = () => {
    return enabledBlocks.reduce((acc, block: EnabledBlock) => {
      const extenionPack = getExtentionByKey(block.extensionKey);
      let result = {};
      if (extenionPack && extensionsState[block.extensionKey]) {
        result = extenionPack.onFinalize(extensionsState[block.extensionKey]);
      }
      return {
        ...acc,
        ...result
      };
    }, {});
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

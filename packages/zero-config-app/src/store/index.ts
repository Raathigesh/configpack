import { useImmer } from "use-immer";
import { EnabledBlock, ExtensionPack, BlockItem } from "../types";
import { generate } from "../services/package-json.service";
import { useState } from "react";
import { getExtensionById, getFiles } from "./selectors";

export default function app() {
  const [availableExtensions, setAvailableExtensions] = useImmer([]);
  const [extensionState, setExtensionState] = useImmer({});
  const [activeBlocks, setActiveBlocks] = useImmer([]);
  const [activeFile, setActiveFile] = useState("");

  return {
    availableExtensions,
    extensionState,
    activeBlocks,
    activeFile,
    setActiveFile,
    addExtension(extension: ExtensionPack) {
      setAvailableExtensions((draft: ExtensionPack[]) => {
        draft.push(extension);
        setExtensionState((draft: { [id: string]: any }) => {
          draft[extension.id] = extension.getInitialState();
        });
      });
    },
    setExtensionState(id: string, state: any) {
      setExtensionState((draft: { [id: string]: any }) => {
        draft[id] = state;
      });
    },
    addBlock(extensionId: string, block: BlockItem) {
      setActiveBlocks((draft: EnabledBlock[]) => {
        draft.push({
          extensionId,
          ...block
        });
      });
    },
    files() {
      return getFiles(activeBlocks, availableExtensions, extensionState);
    }
  };
}

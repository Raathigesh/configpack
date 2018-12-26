import { useImmer } from "use-immer";
import { EnabledBlock, ExtensionPack, BlockItem } from "../types";
import { generate } from "../services/package-json.service";
import { useState } from "react";

export default function app() {
  const [availableExtensions, setAvailableExtensions] = useImmer([]);
  const [extensionState, setExtensionState] = useImmer({});
  const [activeBlocks, setActiveBlocks] = useImmer([]);
  const [activeFile, setActiveFile] = useState("");

  return {
    availableExtensions,
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
    extensionState,
    activeBlocks,
    addBlock(extensionId: string, block: BlockItem) {
      setActiveBlocks((draft: EnabledBlock[]) => {
        draft.push({
          extensionId,
          ...block
        });
      });
    },
    files() {
      return activeBlocks.reduce(
        (acc: any, block: EnabledBlock) => {
          const extenionPack = availableExtensions.find(
            (ext: ExtensionPack) => ext.id === block.extensionId
          );
          let result: any = {};
          if (extenionPack && extensionState[block.extensionId]) {
            result = extenionPack.onFinalize(extensionState[block.extensionId]);
          }
          return {
            ...acc,
            ...result.files
          };
        },
        {
          "package.json": generate(
            activeBlocks
              .filter((block: EnabledBlock) => block.packageJson)
              .map((block: EnabledBlock) => block.packageJson)
          )
        }
      );
    },
    activeFile,
    setActiveFile
  };
}

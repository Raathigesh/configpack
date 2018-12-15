import { useState } from "react";
import { ExtensionPack } from "../types";

export default function extensions() {
  const [extensions, setExtensions] = useState<ExtensionPack[]>([]);
  const [extensionsState, setExtensionsState] = useState<{
    [extensionKey: string]: any;
  }>({});

  const getExtentionByKey = (key: string) =>
    extensions.find(ext => ext.id === key);

  const updateExtensionState = (key: string, state: any) => {
    setExtensionsState({
      ...extensionsState,
      [key]: state
    });
  };

  const addExtenion = (extension: ExtensionPack) => {
    setExtensions([...extensions, extension]);
    updateExtensionState(extension.id, extension.getInitialState());
  };

  return {
    extensions,
    extensionsState,
    getExtentionByKey,
    addExtenion,
    updateExtensionState
  };
}

import React from "react";
import { Classes, Icon, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";
import styled from "react-emotion";
import { TreeItem } from "./state";

const Container = styled("div")`
  width: 250px;
  background-color: #1a1b44;
`;

interface Props {
  files: TreeItem[];
  activeFile: string;
  setActiveFile: (fileName: string) => void;
}

export default function Files({ files, activeFile, setActiveFile }: Props) {
  const content: ITreeNode[] = [
    {
      id: "Project Name",
      hasCaret: true,
      icon: "document",
      label: "Project Name",
      isExpanded: true,
      childNodes: files.map(file => ({
        id: file.name,
        hasCaret: file.children && file.children.length > 0,
        icon: "document",
        label: file.name,
        isExpanded: false,
        isSelected: activeFile === file.name
      }))
    }
  ];

  return (
    <Container>
      <Tree
        contents={content}
        onNodeClick={node => {
          setActiveFile(node.label as string);
        }}
      />
    </Container>
  );
}

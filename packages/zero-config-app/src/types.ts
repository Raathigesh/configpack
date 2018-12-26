import { ColorProps, SpaceProps } from "styled-system";

export interface BlockItem {
  component: any;
  name: string;
  description: string;
}

export interface ExtensionPack {
  id: string;
  displayName: string;
  description: string;
  blocks: BlockItem[];
  onFinalize(options: any): any;
  getInitialState: () => any;
}

export interface EnabledBlock extends BlockItem {
  extensionId: string;
  packageJson?: any;
}

export interface BoxProps extends ColorProps, SpaceProps {}

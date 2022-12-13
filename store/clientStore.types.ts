import { relationType } from 'types/nodes.types';

export type Clientdraft = {
  nodes: string[];
  relations: relationType[];
  pathOrder: string[];
};

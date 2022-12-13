import { relationType } from 'types/nodes.types';

export interface IGraph {
  relations: relationType[];
  pathOrder?: string[];
}

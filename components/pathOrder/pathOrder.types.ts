import { Actions } from 'store/clientStore.actions';
import { relationType } from 'types/nodes.types';

export interface IPathOrder {
  nodes: string[];
  relations: relationType[];
  dispatch: (action: Actions) => void;
  pathOrder: string[];
}

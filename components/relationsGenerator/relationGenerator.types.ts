import { Actions } from 'store/clientStore.actions';
import { relationType } from 'types/nodes.types';

export interface IRelationsGenerator {
  nodes: string[];
  dispatch: (action: Actions) => void;
  relations: relationType[];
}

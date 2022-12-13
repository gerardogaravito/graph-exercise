import { Actions } from 'store/clientStore.actions';

export interface INode {
  name: string;
  dispatch: (action: Actions) => void;
  pathOrder: string[];
  isPathOrder?: boolean;
  disabled?: boolean;
}

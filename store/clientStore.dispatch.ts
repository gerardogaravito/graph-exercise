import { Actions } from './clientStore.actions';

export type ClientDispatch = {
  dispatch: (action: Actions) => void;
};

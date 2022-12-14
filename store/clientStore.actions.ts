type NodesActions =
  | { type: 'ADD_NODE'; payload: { newNode: string } }
  | { type: 'DELETE_NODE'; payload: { deleteNode: string } };

type RelationsActions = {
  type: 'ADD_RELATION';
  payload: { relation: string; weight: number };
};

type PathOrderActions =
  | { type: 'ADD_STEP'; payload: { newStep: string } }
  | { type: 'DELETE_STEP' };

type SetupActions = { type: 'RESTART' };

export type Actions =
  | NodesActions
  | RelationsActions
  | PathOrderActions
  | SetupActions;

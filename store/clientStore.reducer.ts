import { Actions } from './clientStore.actions';
import { Clientdraft } from './clientStore.types';

const reducer = (draft: Clientdraft, action: Actions) => {
  switch (action.type) {
    case 'ADD_NODE':
      const { newNode } = action.payload;
      draft.nodes = [...draft.nodes, newNode];
      break;

    case 'DELETE_NODE':
      const { deleteNode } = action.payload;
      const index = draft.nodes.indexOf(deleteNode);
      draft.nodes.splice(index, 1);
      break;

    case 'ADD_RELATION':
      const { relation, weight } = action.payload;
      draft.relations = [...draft.relations, { relation, weight }];
      break;

    default:
      throw new Error('Invalid action type');
  }
};

export default reducer;

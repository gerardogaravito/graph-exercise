type NodesActions =
  | { type: 'ADD_NODE'; payload: { newNode: string } }
  | { type: 'DELETE_NODE'; payload: { deleteNode: string } };

type RelationsActions = {
  type: 'ADD_RELATION';
  payload: { relation: string; weight: number };
};
// | {
//     type: 'LOGIN';
//     payload: {
//       email: string;
//       accessToken: string;
//       refreshToken: string;
//       accessTokenExpiration?: string;
//     };
//   }

export type Actions = NodesActions | RelationsActions;

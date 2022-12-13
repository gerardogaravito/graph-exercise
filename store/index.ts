import produce from 'immer';
import create, { State, StateCreator } from 'zustand';
import { Clientdraft } from './clientStore.types';
import { Actions } from './clientStore.actions';
import { ClientDispatch } from './clientStore.dispatch';
import initialClientState from './clientStore.draft';
import reducer from './clientStore.reducer';

const immer =
  <T extends State>(
    //@ts-ignore
    config: StateCreator<T, (fn: (draft: T) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    //@ts-ignore
    config((fn) => set(produce(fn) as (state: T) => T), get, api);

export const useStore = create<Clientdraft & ClientDispatch>(
  immer((set) => ({
    ...initialClientState,
    //@ts-ignore
    dispatch: (args: Actions) => set((state) => reducer(state, args)),
  }))
);

import React, { FC } from 'react';
import styles from './node.module.scss';
import { useStore } from 'store';

interface INode {
  name: string;
}

const Node: FC<INode> = ({ name }) => {
  const { dispatch } = useStore();

  return (
    <div className={styles.node}>
      <button
        className={styles.node__delete}
        onClick={() => {
          dispatch({ type: 'DELETE_NODE', payload: { deleteNode: name } });
        }}
      >
        delete
      </button>
      <button className={styles.node__circle} onClick={() => {}}>
        {name}
      </button>
    </div>
  );
};

export default Node;

import React, { FC } from 'react';
import styles from './node.module.scss';
import { useStore } from 'store';
import { Actions } from 'store/clientStore.actions';

interface INode {
  name: string;
  dispatch: (action: Actions) => void;
  pathOrder: string[];
  isPathOrder?: boolean;
  disabled?: boolean;
}

const Node: FC<INode> = ({
  name,
  dispatch,
  pathOrder,
  isPathOrder = false,
  disabled = false,
}) => {
  const handleNodeClick = () => {
    if (isPathOrder && !pathOrder.includes(name)) {
      dispatch({ type: 'ADD_STEP', payload: { newStep: name } });
    }
  };

  const handleDeleteClick = () => {
    dispatch({ type: 'DELETE_NODE', payload: { deleteNode: name } });
  };

  return (
    <div className={styles.node}>
      {isPathOrder && pathOrder.includes(name) && (
        <div className={styles.node__stepNumber}>
          {pathOrder.indexOf(name) + 1}
        </div>
      )}
      {!isPathOrder && (
        <button className={styles.node__delete} onClick={handleDeleteClick}>
          delete
        </button>
      )}
      <button
        disabled={disabled}
        className={
          isPathOrder && !pathOrder.includes(name)
            ? styles.node__circlePath
            : styles.node__circle
        }
        onClick={handleNodeClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Node;

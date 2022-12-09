import React, { FC, useState } from 'react';
import { useStore } from 'store';
import styles from './nodesinput.module.scss';

import { Node } from 'components';

const NodesInput: FC = () => {
  const { nodes, dispatch } = useStore();

  const [newNode, setNewNode] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const handleAddNode = () => {
    if (nodes.includes(newNode)) {
      setShowError(true);
      setNewNode('');
    } else if (newNode.length > 0) {
      dispatch({ type: 'ADD_NODE', payload: { newNode: newNode } });
      setShowError(false);
      setNewNode('');
    }
  };

  return (
    <section className={styles.nodesInput}>
      <div className={styles.nodesInput__form}>
        <label className={styles.nodesInput__label}>Enter new node:</label>
        <br />
        <div>
          <input
            type='text'
            className={styles.nodesInput__input}
            onChange={(e) => setNewNode(e.target.value)}
            maxLength={10}
            value={newNode}
          />
          <button className={styles.nodesInput__submit} onClick={handleAddNode}>
            Add
          </button>
        </div>
        {showError && (
          <small>
            There is a node with that name already. <br />
          </small>
        )}
      </div>

      <div className={styles.nodesContainer}>
        {nodes.map((node) => (
          <Node key={node} name={node} />
        ))}
      </div>
    </section>
  );
};

export default NodesInput;

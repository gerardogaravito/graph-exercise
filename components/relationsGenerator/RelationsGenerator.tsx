import React, { FC, useState } from 'react';
import Select from 'react-select';
import styles from './relationsGenerator.module.scss';
import { useFixNodesForSelectors } from 'hooks';
import { IRelationsGenerator } from './relationGenerator.types';

const RelationsGenerator: FC<IRelationsGenerator> = ({
  nodes,
  dispatch,
  relations,
}) => {
  const [firstNode, setFirstNode] = useState<string>('');
  const [secondNode, setSecondNode] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [showError, setShowError] = useState<string>('');

  const { options } = useFixNodesForSelectors(nodes);

  const handleAddRelation = () => {
    if (firstNode === secondNode) {
      setShowError('Can not connect same node');
    } else if (
      relations.find((item) =>
        item.relation.includes(`${firstNode} -- ${secondNode}`)
      ) ||
      relations.find((item) =>
        item.relation.includes(`${secondNode} -- ${firstNode}`)
      )
    ) {
      setShowError('Relation already created.');
    } else {
      setShowError('');
      dispatch({
        type: 'ADD_RELATION',
        payload: {
          relation: `${firstNode} -- ${secondNode}`,
          weight,
        },
      });
      setWeight(1);
    }
  };

  return (
    <>
      <Select
        className={styles.nodeSelector}
        options={options}
        onChange={(e) => {
          if (e) setFirstNode(e.value);
        }}
      />
      <p>connects with:</p>
      <Select
        className={styles.nodeSelector}
        options={options}
        onChange={(e) => {
          if (e) setSecondNode(e.value);
        }}
      />
      <input
        type='number'
        placeholder='Weight'
        className={styles.weightInput}
        onChange={(e) => setWeight(e.target.valueAsNumber)}
        value={weight}
        min={0}
      />
      {showError.length > 0 && <p>{showError}</p>}
      <button className={styles.generateButton} onClick={handleAddRelation}>
        Generate relation
      </button>
    </>
  );
};

export default RelationsGenerator;

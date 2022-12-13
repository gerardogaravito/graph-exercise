import React, { FC } from 'react';
import { Node } from 'components';
import styles from './pathOrder.module.scss';
import { relationType } from 'types/nodes.types';
import {
  useFilterNodesInGraph,
  useValidateNextStep,
  useCalculateCost,
} from 'hooks';
import { Actions } from 'store/clientStore.actions';

interface IPathOrder {
  nodes: string[];
  relations: relationType[];
  dispatch: (action: Actions) => void;
  pathOrder: string[];
}

const PathOrder: FC<IPathOrder> = ({
  nodes,
  relations,
  dispatch,
  pathOrder,
}) => {
  const { nodesInGraph } = useFilterNodesInGraph(nodes, relations);

  const { possibleNextSteps } = useValidateNextStep(
    nodesInGraph,
    pathOrder,
    relations
  );

  const { totalCost } = useCalculateCost(pathOrder, relations);

  const handleGoStepBack = () => {
    dispatch({ type: 'DELETE_STEP' });
  };

  return (
    <>
      <div className={styles.cost}>
        <h2>Total cost: {totalCost}</h2>
        {pathOrder.length > 0 && (
          <button className={styles.cost__stepBack} onClick={handleGoStepBack}>
            go one step back
          </button>
        )}
      </div>
      <p>Click on the nodes to create your desired route</p>
      <div className={styles.nodesContainer}>
        {nodesInGraph.map((node) => (
          <Node
            key={node}
            name={node}
            isPathOrder
            dispatch={dispatch}
            pathOrder={pathOrder}
            disabled={
              !possibleNextSteps.includes(node) || pathOrder.includes(node)
            }
          />
        ))}
      </div>
    </>
  );
};

export default PathOrder;

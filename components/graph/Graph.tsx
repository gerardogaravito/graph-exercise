import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import styles from './graph.module.scss';
import { relationType } from 'types/nodes.types';
import { useCreateDot } from 'hooks';

const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

interface IGraph {
  relations: relationType[];
}

const Graph: FC<IGraph> = ({ relations }) => {
  const { dot } = useCreateDot(relations);

  return (
    <Graphviz
      options={{ height: 450 }}
      dot={dot}
      className={styles.graph_container}
    />
  );
};

export default Graph;

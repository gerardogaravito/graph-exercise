import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { relationType } from 'types/nodes.types';
import { useCreateDot } from 'hooks';

const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

interface IGraph {
  relations: relationType[];
  pathOrder?: string[];
}

const Graph: FC<IGraph> = ({ relations, pathOrder }) => {
  const { dot } = useCreateDot(relations, pathOrder);

  return <Graphviz options={{ height: 450 }} dot={dot} />;
};

export default Graph;

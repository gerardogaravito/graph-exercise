import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { useCreateDot } from 'hooks';
import { IGraph } from './graph.types';

const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

const Graph: FC<IGraph> = ({ relations, pathOrder }) => {
  const { dot } = useCreateDot(relations, pathOrder);

  return <Graphviz options={{ height: 450 }} dot={dot} />;
};

export default Graph;

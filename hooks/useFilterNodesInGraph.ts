import { relationType } from 'types/nodes.types';

const useFilterNodesInGraph = (nodes: string[], relations: relationType[]) => {
  const nodesInGraph: string[] = nodes.filter((node) =>
    relations.some((rel) => rel.relation.includes(node))
  );

  return { nodesInGraph };
};

export default useFilterNodesInGraph;

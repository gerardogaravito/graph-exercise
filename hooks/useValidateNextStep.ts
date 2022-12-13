import { relationType } from 'types/nodes.types';

const useValidateNextStep = (
  nodesInGraph: string[],
  pathOrder: string[],
  relations: relationType[]
) => {
  if (pathOrder.length > 0) {
    const possibleNextSteps: string[] = nodesInGraph.filter((node) =>
      relations.some(
        (rel) =>
          rel.relation.includes(node) &&
          rel.relation.includes(pathOrder[pathOrder.length - 1])
      )
    );

    return { possibleNextSteps };
  } else {
    const possibleNextSteps = nodesInGraph;
    return { possibleNextSteps };
  }
};

export default useValidateNextStep;

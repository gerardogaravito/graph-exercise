import { selectorOptionsType } from 'types/nodes.types';

const useFixNodesForSelectors = (nodes: string[]) => {
  const options: selectorOptionsType = [];

  nodes.forEach((node) => {
    options.push({
      value: node,
      label: node,
    });
  });

  return { options };
};

export default useFixNodesForSelectors;

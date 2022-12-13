import { relationType } from 'types/nodes.types';

const useCalculateCost = (pathOrder: string[], relations: relationType[]) => {
  let totalCost: number = 0;
  let alreadyCheked: relationType[] = [];

  if (pathOrder.length > 1) {
    pathOrder.forEach((node, index) => {
      if (index + 1 < pathOrder.length) {
        relations.forEach((rel) => {
          if (
            rel.relation.includes(node) &&
            rel.relation.includes(pathOrder[index + 1]) &&
            !alreadyCheked.includes(rel)
          ) {
            totalCost += rel.weight;
            alreadyCheked.push(rel);
          } else if (
            rel.relation.includes(node) &&
            rel.relation.includes(pathOrder[index - 1]) &&
            !alreadyCheked.includes(rel)
          ) {
            totalCost = totalCost;
            alreadyCheked.push(rel);
          } else if (
            rel.relation.includes(node) &&
            !alreadyCheked.includes(rel)
          ) {
            totalCost = totalCost + rel.weight * 2;
            alreadyCheked.push(rel);
          }
        });
      }
    });
  }

  return { totalCost };
};

export default useCalculateCost;

import { relationType } from 'types/nodes.types';

const useCreateDot = (
  relations: relationType[],
  pathOrder: string[] | undefined
) => {
  // examples of how dot language is built:
  // https://graphs.grevian.org/example#example-1

  const printPath = (item: relationType) => {
    // here we validate if both elements of the relations are next to each other
    return (
      pathOrder &&
      (pathOrder.indexOf(item.relation.split(' -- ')[0]) ==
        pathOrder.indexOf(item.relation.split(' -- ')[1]) - 1 ||
        pathOrder.indexOf(item.relation.split(' -- ')[0]) ==
          pathOrder.indexOf(item.relation.split(' -- ')[1]) + 1) &&
      pathOrder.indexOf(item.relation.split(' -- ')[0]) >= 0 &&
      pathOrder.indexOf(item.relation.split(' -- ')[1]) >= 0
    );
  };

  const dot = `graph{
      ${relations
        .map((item) => {
          if (printPath(item)) {
            return `${item.relation}[label="${item.weight}",weight="${item.weight}",color=red,penwidth=3.0];`;
          }
          return `${item.relation}[label="${item.weight}",weight="${item.weight}"];`;
        })
        .join('')}
    }`;

  return { dot };
};

export default useCreateDot;

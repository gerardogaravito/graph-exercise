import { relationType } from 'types/nodes.types';

const useCreateDot = (relations: relationType[]) => {
  // examples of how dot language is built:
  // https://graphs.grevian.org/example#example-1

  const dot = `graph{
      ${relations
        .map(
          (item) =>
            `${item.relation}[label="${item.weight}",weight="${item.weight}"];`
        )
        .join('')}
    }`;

  return { dot };
};

export default useCreateDot;

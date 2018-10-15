// https://egghead.io/lessons/react-create-a-pipe-function-to-enable-function-composition
// https://stackoverflow.com/a/37826698/511710
export const chunk = (inputArray, perChunk) => {
  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};


export const getACsuggestions = (wordDict, text) => {
  if (text.length < 3) {
    return [];
  }
  const possibleWords = wordDict[text.slice(0, 3)];
  return possibleWords.filter(x => x.slice(0, text.length) === text.toLowerCase() && x !== text.toLowerCase()).slice(0, 10);
};

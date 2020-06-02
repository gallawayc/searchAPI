import fetch from 'node-fetch';

export const getWords = async () => {
  const wordsRes = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json');
  const wordsObj = await wordsRes.json();
  const words = Object.keys(wordsObj);
  const orginizedWords = {};
  words.forEach(word => {
    const wordPrefix = word.slice(0, 3);
    const wordList = orginizedWords[wordPrefix];
    if (wordList) {
      wordList.push(word);
    } else {
      orginizedWords[wordPrefix] = [word];
    }
  });
  return orginizedWords;
};

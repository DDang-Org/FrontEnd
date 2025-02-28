export const attachSuffix = (word: string) => {
  const lastChar = word[word.length - 1];
  const charCode = lastChar.charCodeAt(0);
  const hasBatchim = (charCode - 0xac00) % 28 !== 0;

  return word + (hasBatchim ? '이' : '');
};

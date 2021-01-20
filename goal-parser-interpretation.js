/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let oChar = /\(\)/g;
  let alChar = /\(al\)/g;
  let charReplace = command.replace(oChar, "o").replace(alChar, "al");
  return charReplace
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam( members ) {
  // throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
 //  if ( !Array.isArray(members) || members.every(n=> typeof n !== "string") || members.some(n=> n ===null )) {return false}
   //if (members.every(n=> typeof n === "string" ) || members.some(n=> n !==null )) {

// else { return members.map(n=> n.trimStart().slice(0,1).sort().join('').toUpperCase();}
if (!Array.isArray(members)) {
  return false;
}
  else {
  return members.filter((n) => typeof n === "string").map((n) => n.trimStart().slice(0,1).toUpperCase())
  .sort().join("");
}
}


 module.exports = {
   createDreamTeam
 };
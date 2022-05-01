const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date ) {
//  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log(date);
  if (!date ) {
    return 'Unable to determine the time of year!'};

  if (!(date instanceof Date) || date.hasOwnProperty('toString')) {
  throw new Error('Invalid date!')};

  let season = date.getMonth();

    if(season <=1 || season === 11 ) return 'winter';
    if(season >=2 && season <= 4 ) return "spring";
    if(season >=5 && season <= 7  ) return 'summer';
    if(season >=8 && season <= 10  ) return  'autumn';
}

module.exports = {
  getSeason
};

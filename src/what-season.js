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
function getSeason(date) {

  let season ='';


  if(!arguments.length){
    return 'Unable to determine the time of year!' ;
  }
  
  if(!(date instanceof Date )){
    throw new Error('Invalid date!');
  }
  



  let month = date.getMonth();

  if(month == 5 || month == 6 || month == 7){
    season = 'summer';
  } else if (month == 8 || month == 9 || month == 10){
    season = 'autumn';
  } else if (month == 2 || month == 3 || month == 4){
    season = 'spring';
  }  else {
    season = 'winter';
  }
  return season;
  // console.log(season);
}

// getSeason(34);
// getSeason(new Date(2018, 4, 17, 11, 27, 4, 321));

module.exports = {
  getSeason
};

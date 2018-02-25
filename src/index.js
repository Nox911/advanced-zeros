module.exports = function getZerosCount(number, base) {
  let zeros_of_base=0;
  // let zeros_of_two=0;
  let currentBase = searchBase(base);
  factorial (number);
  
  
  //calculate whole number of five
  function five (num) {
      if (num>=5) {
          return 	parseInt(num/5)+five(parseInt(num/5));
      }
      else {
          return 0;
      }
  }
  //calculate whole number of two
  function zerosOfBase (num,curBase) {
      if (num>=curBase) {
          return 	parseInt(num/curBase)+zerosOfBase(parseInt(num/curBase),curBase);
      }
      else {
          return 0;
      }
  }

  function searchBase (base) {
      if (base%2===0) {
          return searchBase(base/2);
      }
      else {
          return base;
      }
  }

  function factorial (num) {
      // zeros_of_five+=five(num);
      zeros_of_base+=zerosOfBase(num,currentBase);
  }

  // zeros+=Math.min(zeros_of_five,zeros_of_two);
  return zeros_of_base;
}
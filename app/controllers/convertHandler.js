/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = eval(input.match(/\d+(?:\.\d+)*(?:\/\d+(?:\.\d+)*)*/)); //matches any kind of number and fraction
    if(input.match(/^gal$|^lbs$|^l$|^kg$|^mi$|^km$/i)) {
      result = [1];
    }
    if(!result) {return false;}
    result = eval(result[0]);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    if(!input.match(/gal$|lbs$|l$|kg$|mi$|km$/i)) {return false;}
    result = input.match(/gal$|lbs$|l$|kg$|mi$|km$/i)[0].toLowerCase();
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }
    
    result = result.toFixed(5);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = `${initNum}${initUnit} converts to ${returnNum}${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
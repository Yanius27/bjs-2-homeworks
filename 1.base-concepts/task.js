"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant= b**2-4*a*c;
  
  if(discriminant < 0) return arr;
  else if (discriminant === 0) {
    arr= [-b/(2*a)];
    return arr;
  }  
  else {
    arr = [Math.round((-b + Math.sqrt(b) )/(2*a)), Math.round((-b - Math.sqrt(b) )/(2*a))];
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let remainder;
  let payment;
  let totalAmount;

  if(isNaN(+percent) || isNaN(+contribution) || isNaN(+amount) || isNaN(+countMonths)) return false;

  percent= +percent / 100 / 12;
  remainder= +amount - +contribution;
  payment= remainder * (percent + (percent / (((1 + percent)**+countMonths) - 1)));

  totalAmount= payment*countMonths;
  
  return +totalAmount.toFixed(2);
}

calculateTotalMortgage(15, 30000, 150000, 12);
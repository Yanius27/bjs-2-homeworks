"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  
  if(`${b**2-4*a*c}` < 0) return arr;
  else if (`${b**2-4*a*c}` == 0) return arr = [Number(`${-b/(2*a)}`)];
  else return arr = [Number(Math.round(`${(-b + Math.sqrt(b) )/(2*a)}`)), Number(Math.round(`${(-b - Math.sqrt(b) )/(2*a)}`))];
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
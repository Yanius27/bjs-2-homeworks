function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= min) {
      min = arr[i];
    }
    else if(arr[i] >= max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = (sum / arr.length).toFixed(2);

  return { 'min': min, 'max': max, 'avg': +avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((accum, current) => accum + current, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) return 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let differenceMaxMin = max - min;
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? sumEvenElement += arr[i] : sumOddElement += arr[i];
  }
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  let result = sumEvenElement / countEvenElement;
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

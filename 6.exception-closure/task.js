function parseCount(string) {
  if(Number.parseFloat(string)) {return Number.parseFloat(string);}
  else throw new Error('Невалидное значение');
}

function validateCount(string) {
  try {
    return parseCount(string);
  }
  catch(error) {
    console.log(error);
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if(a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;  
  }
  
  get area() {
    let p = 0.5 * (this.perimeter);
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
  }

}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch(error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },

      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}


class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5; 
  }

  set state(bookState) {
    if(bookState < 0) {
      this._state = 0;
    }
    
    else if(bookState > 100) {
      this._state = 100;  
    }

    else {
      this._state = bookState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
    this.author = author;
  }
}



class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) this.books.push(book);
  }

  findBookBy(type, value) {
    let result = null;
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i][type] === value) {result = this.books[i]};
    }
    return result;
  }

  giveBookByName(bookName) {
    let result = null;
    for (let i = 0; i < this.books.length; i++) {
    if(this.books[i].name === bookName) {
      result = this.books[i];
      this.books.splice(i, 1);
    }
    }
    return result;
  }
}





class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if(mark < 2 || mark > 5) return;

    if(subject in this.marks) {
      this.marks[subject].push(mark);
    }
    else {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if(!(subject in this.marks)) return 0;
  
    let sum = this.marks.subject.reduce((a, b) => a + b, 0);
    let result = sum / this.marks.subject.length;
    return Math.round(result);
  }
}


new Student('John', 'male', 26);
new Student('Mary', 'female', 24);
new Student('Julia', 'female', 25);
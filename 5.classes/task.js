class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name= name;
    this.releaseDate= releaseDate;
    this.pagesCount= pagesCount;
    this.state= 100;
    this.type= null;
  }

  fix() {
    this.state*= 1.5; 
  }

  set state(state) {
    if(state < 0) state= 0;
    else if(state > 100) state= 100;
    else state;
  }

  get state() {
    return this.state;
  }

}
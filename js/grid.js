class Grid{
  constructor(column, row){
    this.column = column;
    this.row = row;
  }
  getColumn(){
    return this.column;
  }
  getRow(){
    return this.row;
  }
  shiftRowDown(){
    ++this.row;
  }
}

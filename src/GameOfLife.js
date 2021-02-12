class GameOfLife {

  tick(board) {
    let testingCell = board[1][1]
    let liveCells = board.flat().reduce((a, b) => a + b)
    if (this.willSurvive(testingCell, liveCells)) {
      return 1
    } else {
      return 0
    }
  }

  isAlive(cell) {
    return cell === 1
  }

  willSurvive(cell, neighbours) {
    if (this.isAlive(cell)) {
      neighbours -= 1;
      return neighbours === 2 || neighbours === 3
    } else {
      return neighbours === 3
    }
  }

}

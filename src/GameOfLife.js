class GameOfLife {

  nextBoard (board) {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

  tick (snapshot) {
    let testingCell = snapshot[1][1];
    let liveCells = snapshot.flat().reduce((a, b) => a + b) - testingCell;
    if (this.willBeLiveNextTick(testingCell, liveCells)) {
      return 1
    } else {
      return 0
    }
  }

  isLive(cell) {
    return cell === 1;
  }

  willBeLiveNextTick(cell, neighbours) {
    if (this.isLive(cell)) {
      return neighbours === 2 || neighbours === 3;
    } else {
      return neighbours === 3;
    }
  }

}

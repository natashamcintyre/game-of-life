describe("GameOfLife", function() {
  var game;

  beforeEach(function() {
    game = new GameOfLife();
  });

  // 3 x 3 grid, update middle square only
  it("dead cell: should return 0 if no neighbours are 1", function() {
    expect(game.tick([[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toEqual(0);
  });

  it("dead cell: should return 1 if 3 neighbours are 1", function() {
    expect(game.tick([[0, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual(1);
  });

  it("dead cell: should return 0 if 1 neighbour is 1", function() {
    expect(game.tick([[0, 0, 0], [0, 0, 1], [0, 0, 0]])).toEqual(0);
  });

  it("live cell: should return 0 if 1 neighbour is 1", function() {
    expect(game.tick([[1, 0, 0], [0, 1, 0], [0, 0, 0]])).toEqual(0);
  });

  it("live cell: should return 1 if 2 neighbours are 1", function() {
    expect(game.tick([[1, 0, 0], [0, 1, 0], [1, 0, 0]])).toEqual(1)
  });

  it("live cell: should return 1 if 3 neighbours are 1", function() {
    expect(game.tick([[1, 0, 0], [0, 1, 1], [1, 0, 0]])).toEqual(1)
  });

  it("live cell: should return 0 if 4 neighbours are 1", function() {
    expect(game.tick([[1, 1, 0], [0, 1, 0], [0, 1, 1]])).toEqual(0);
  });

  // 4 x 4 grid, update middle 2 x 2 only
  it('returns full 3x3 board correctly - all dead', function() {
    expect(game.nextBoard([[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
  });

  it('blinker', function() {
    expect(game.nextBoard([[0, 0, 0], [1, 1, 1], [0, 0, 0]])).toEqual([[0, 1, 0], [0, 1, 0], [0, 1, 0]])
  });

});

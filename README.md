Conway's Game of Life
game of life example

The Game of life is a zero player game developed in the 70s by John Horton Conway. Check out the wikipedia article for a full description. The evolving state of the game is determined by the initial configuration - some configurations become infinitely evolving constellations, others eventually evolve into a stable patterns, whilst others die off completely. It is commonly used as a tech test as it can be solved in many different ways that clearly show the level of the programmer.

The Brief
The rules are as follows:

The game evolves in turns, commonly known as 'ticks'.
All changes occur at the same time.
Any live cell with 2 or 3 live neighbours survives until next tick.
Any live cell with less than 2 live neighbours dies (underpopulation).
Any live cell with more than 3 live neighbours dies (overpopulation).
Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).
Write code that is capable of calculating each new generation, given a starter board. Although you don't have to build a visualisation tool to be able to see the evolution, it should be easy to extend the program to add on a web or command line ui.

For each tick - iterate through the 'grid' (array?). For each 'square', look at:
  - same row, column ± 1
  - same column, row ± 1
  - row + 1, column ± 1
  - row - 1, column ± 1
and count the number of 1s (liveCount).
  if liveCount == 2
    if currentSquare.isLive?
      1
    else
      0
  elsif liveCount == 3
    1
  else
    0
Do this for all cells, do not actually update values between each iteration.

Input | Output
-|-
[1] | [0]
[[1, 1], [0, 1]] | [[1, 1], [1, 1]]
[[1, 0], [0, 1]] | [[0, 0], [0, 0]]
[[1, 1, 1], [1, 1, 1], [1, 1, 1]] | [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

After doing several tests and exploring the implementation, I decided that actually the most straightforward test was the center square of a 3x3 grid, which looks at the neighbours, counts 1s and deduces whether that square will be alive next tick or not. I believe this should work for all inputs of a 3 x 3 grid.

I can now take 2 routes:
- Expand the grid and iterate through the central squares.
- Work out how to calculate the edge squares

I'm not sure if this approach is the correct approach for TDD as I'm focusing on just one cell, as opposed to the input of a whole grid. I think this is an "Inside Out" approach?

Perhaps my approach should actually be considering a 3 x 3 grid only, but I don't think the game of life has borders so perhaps this would not be the correct approach. I think I will therefore expand the grid to a 4 x 4 square and focus on the middle squares.

[More tech tests here](https://github.com/makersacademy/course/tree/master/individual_challenges)

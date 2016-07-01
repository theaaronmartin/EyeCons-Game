# FIRST QUARTER LAB:  Eyecons Game

## REQUIRED:
- Create a UI for the main game
- Randomly generate 100 TOTAL tiles on the grid (50 matching pairs) that includes ALL the eyecons from one set of icons you select (note: the number of eyecons will vary by set, and will not divide cleanly into 50)
- Each grid can contain randomly between zero and 3 eyecons (stacked)
- When 2 of the same tiles are clicked they must disappear
- Create a timer for 2 minutes that can be paused as well as end the game
- Create an eyecons remaining counter that’s decremented with each correct pair selected


## EXTRA CREDIT:
- Animate the tiles to “bounce” when clicked
- Add sounds for each event:
  - Eyecon loaded to screen
  - First click
  - Successful match
  - Incorrect match
  - Same eyecon clicked as first guess
- If the user selects all pairs before time runs out, alert them that they have won
- Create 4 boosts
  - Bomb: Blow away 3 random pairs
  - Gold Brick: Turn 3 random pairs into gold, which can then be selected in any order and are removed
  - Hints: Quickly highlight/emphasize a single random pair (can be used three times)
  - +5: Adds 5 seconds to the game clock

## FILES

Files are in this folder:

- eyecons-game-assets.zip
- eyecons-demo.mov
- eyecons-screen.png

## HINT

Here's a list of the different tilesets (included in the zip file) and the number of tiles in each.

```json
{
    title: "Tile Set",
    type: "list",
    options: [
        { id: 1, title: "DefJam", tiles: 26},
        { id: 2, title: "Dr. Pepper", tiles: 27},
        { id: 3, title: "ESPN", tiles: 34},
        { id: 4, title: "Hard Rock", tiles: 35},
        { id: 5, title: "Nike", tiles: 34},
        { id: 6, title: "Playboy", tiles: 34},
        { id: 7, title: "Travelocity", tiles: 37},
        { id: 8, title: "Expedia", tiles: 35},
        { id: 9, title: "Priceline", tiles: 32},
        { id: 10, title: "Barnes & Noble", tiles: 37},
        { id: 11, title: "Spinmaster", tiles: 34},
        { id: 12, title: "Live Nation", tiles: 45}
    ]
}
```

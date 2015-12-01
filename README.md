#Help the Princess Avoid the Bugs

**WARNING:** This game is very boring. There is no score. There are no sounds. There is no overarching goal. Avoid the bugs, get to the water, and start again.

_Instructions:_

1. Move the princess up (▲), down (▼), left (◄), and right (►).
2. She wants to go swimming. But when she gets to the water, she changes her mind and jumps back.
3. She also must avoid the bugs. Why? Because she doesn't like bugs.
4. If she hits a bug, she freaks out and jumps back to her starting point.
5. Once back in the starting position, she decides that she wants to go swimming.

If for some strange reason you are still interested, you can play the game [here](http://chavahj.github.io/nanodegree-arcade-game/).

If for some even stranger reason you want to download this and play it on your machine, then go [here](https://github.com/ChavahJ/nanodegree-arcade-game) and click on "Download ZIP." Extract the files into a new folder on your computer, and open the index.html file in the browser of your choice. Voilà — you can now play the most boring frogger clone on your personal computer.

##FEND PROJECT 3

###Effective JavaScript: Frogger

[List taken from this document.](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub)

[Markdown Information](https://guides.github.com/features/mastering-markdown/)

**Checklist for completing project:**

The Enemy function, including:
- [x] Loading the image by setting this.sprite to the appropriate image in the image folder
- [x] Setting the Enemy initial location
- [x] Setting the Enemy speed

The update method for the Enemy
- [x] Updates the Enemy location
- [x] Handles collision with the Player

Optional: Add your own Enemy methods as needed.

The Player function, including:
- [x] Loading the image by setting this.sprite to the appropriate image in the image folder.
- [x] Setting the Player initial location.
- [x] The update method for the Player (can be similar to the one for the Enemy)
- [x] The render method for the Player (use the code from the render method for the Enemy).
- [x] The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input.
- [x] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
- [x] The player cannot move off screen.
- [x] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).

Optional: Add your own Player methods as needed.

Instantiate entities:
- [x] Creating a new Player object
- [x] Creating several new Enemies objects and placing them in an array called allEnemies

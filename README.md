# Empire game engine

Empire is a game that can be played with a medium size group of people. It is both a cooperative
and unilateral. Empire is also non-repetive, can be customized to any crowd, and be played
with just scraps of paper and pens.

This is a digital version of the same game.

## Basic game rules

At the beginning of the game, the group proposes a question and everyone must secretly submit their
response (either truthfully or not).

Once everyone playing has done so, the person who created the game will start things off by reading
all words to the group twice, after which they will disappear forever. Remember, nobody knows who
responded to the question with what answer yet!

At the beginning, everyone starts as the head of their Empire. Players will go around one by
one guessing who answered the question with what answer. If they guess correctly, the guessed
player (and everyone in their Empire) will secede and join the guesser's Empire. Their job
now is to help the head of the Empire guess the remaining answers. The guesser will continue as
long as they guess correctly, after which their turn is over and the next person will begin guessing.

The winner of the game is the head of the last Empire remaining Empire.

> Hint: Competing Empires will not want to share not yet guessed answer, since they are only displayed twice
> at the very beginning. Every Empire should collaborate internally to remember the answers themselves!

## Deploying the game engine

## Development

In order to spin up a development environment on the engine, we can simply use `docker compose` to
configure all neccessary components

```bash
~/Empire ❯ docker compose -f docker-compose.dev.yml up
[+] Running 2/0
 ⠿ Container back-end   Created                                                                                                                        0.0s
 ⠿ Container front-end  Created                                                                                                                        0.0s
Attaching to back-end, front-end
back-end   | 
back-end   | > empire-v2-backend@1.0.0 start
back-end   | > node src/app.js
back-end   | 
front-end  | 
front-end  | > front-end@0.1.0 start
front-end  | > react-scripts --openssl-legacy-provider start
front-end  | 
front-end  | ℹ ｢wds｣: Project is running at http://172.20.0.3/
front-end  | ℹ ｢wds｣: webpack output is served from 
front-end  | ℹ ｢wds｣: Content not from webpack is served from /app/public
front-end  | ℹ ｢wds｣: 404s will fallback to /
front-end  | Starting the development server...
front-end  | 
front-end  | Compiled successfully!
front-end  | 
front-end  | You can now view front-end in the browser.
front-end  | 
front-end  |   Local:            http://localhost:3000
front-end  |   On Your Network:  http://172.20.0.3:3000
front-end  | 
front-end  | Note that the development build is not optimized.
front-end  | To create a production build, use npm run build.
front-end  | 
```

import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
      "idle-down": 944,
      "walk-down": { from: 944, to: 947, loop: true, speed: 8 },
      "idle-side": 983,
      "walk-side": { from: 983, to: 986, loop: true, speed: 8 },
      "idle-up": 1022,
      "walk-up": { from: 1022, to: 1025, loop: true, speed: 8 },
    },
  });
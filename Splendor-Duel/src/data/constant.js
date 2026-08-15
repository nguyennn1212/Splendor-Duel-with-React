export const GEM_COLORS = {
  BLUE: "blue",
  WHITE: "white",
  GREEN: "green",
  BLACK: "black",
  RED: "red",
  GOLD: "gold",
  PEARL: "pearl",
  NONE: "none",
};

export const GAME_CONFIG = {
  TOTAL_GEMS: {
    [GEM_COLORS.BLUE]: 4,
    [GEM_COLORS.WHITE]: 4,
    [GEM_COLORS.GREEN]: 4,
    [GEM_COLORS.BLACK]: 4,
    [GEM_COLORS.RED]: 4,
    [GEM_COLORS.GOLD]: 3,
    [GEM_COLORS.PEARL]: 2,
  },

  MAX_GEMS_PER_PLAYER: 10,
  MAX_RESERVED_CARDS: 3,

  WIN_CONDITIONS: {
    POINTS: 20,
    CROWNS: 10,
    COLORED_CARD: 10,
  },

  CARD_LEVELS: [1, 2, 3],

  NUM_NOBLES: 4,

  MAX_NOBLES_PER_PLAYER: 2,

  PRIVILEDGE_SCROLLS: 3,
};

export const ABILITY = {
  NONE: "none",
  EXTRA_TURN: "extraTurn",
  MATCHING_TOKEN: "matchingToken",
  TAKE_PRIVILEDGE: "takePriviledge",
  STEAL_GEM: "stealGem",
  TAKE_GEM_TOKEN: "takeGemToken",
};

export const GEM_COLORS = {
    BLUE: 'blue',
    WHITE: 'white',
    GREEN: 'green',
    BLACK: 'black',
    RED: 'red',
    GOLD: 'gold',
    PEARL: 'pearl',
    NONE: 'none'
};

export const GAME_CONFIG = {
    TOTAL_GEMS: {
        [GEM_COLORS.BLUE]: 4,
        [GEM_COLORS.WHITE]: 4,
        [GEM_COLORS.GREEN]: 4,
        [GEM_COLORS.BLACK]: 4,
        [GEM_COLORS.RED]: 4,
        [GEM_COLORS.GOLD]: 3,
        [GEM_COLORS.PEARL]: 2
    },

    MAX_GEMS_PER_PLAYER: 10,
    MAX_RESERVED_CARDS: 3,

    WIN_CONDITIONS: {
        POINTS: 20,
        CROWNS: 10,
        COLORED_CARD: 10
    },

    CARD_LEVELS: [1, 2, 3],
    
    NUM_NOBLES: 4,

    MAX_NOBLES_PER_PLAYER: 2,

    PRIVILEDGE_SCROLLS: 3,

    //rule toggle for simpler game
    RULES: {
        ENABLE_PRIVILEGES: true,
        ENABLE_NOBLES: true,
        ENABLE_RESERVING: true,
        ENABLE_PEARL: true
    }
};

export const PLAYER_TYPES = {
    HUMAN: 'human',
    AI: 'AI'
};

export const GAME_PHASES = {
    SETUP: 'setup',
    ACTIVE: 'active',
    GAME_OVER: 'gameOver'
};

export const ACTION_TYPES = {
    //mandatory actions (must take every turn)
    TAKE_GEMS: 'takeGems',
    BUY_CARD: 'buyCard',
    RESERVE_CARD: 'reserveCard',

    //optional action
    USE_PRIVILEGE: 'usePrivilege',
    REPLENISH_BOARD: 'replenishBoard',

    //final action
    END_TURN: 'endTurn'
}

//actions that privilege scrolls allow you to take (one scroll per action)
export const PRIVILEDGE_TYPES = {
    TAKE_GEMS: 'takeGem',
    TAKE_PEARL: 'takePearl'
};

export const ABILITY = {
    NONE: 'none',
    EXTRA_TURN: 'extraTurn',
    MATCHING_TOKEN: 'matchingToken',
    TAKE_PRIVILEDGE: 'takePriviledge',
    STEAL_GEM: 'stealGem',
    TAKE_GEM_TOKEN: 'takeGemToken'
};

export const NOBLE_REQUIREMENT ={
    FIRST_NOBLE: 3, //first noble requires 3 crowns
    SECOND_NOBLE: 6 //second noble requires 6 crowns
};

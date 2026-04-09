import {GAME_CONFIG, GEM_COLORS, GAME_PHASES, PLAYER_TYPES} from '../data/constants'
import {LEVEL_1_CARDS, LEVEL_2_CARDS, LEVEL_3_CARDS} from '../data/cards'
import {ALL_NOBLES} from '../data/nobles'
import {boardSpiralGenerator, generateSpiralCoordinates} from '../utils/boardSpiralGenerator'
import {shuffleArray} from '../utils/arrayHelpers'

/**
 * Random intial gem grids
 */

function generateGemGrid() {
    const size = GAME_CONFIG.BOARD_SIZE; // 5x5

    //empty 5x5 grid
    const grid = Array(size).fill(null).map(() => Array(size).fill(null));

    // Create a gem "bank"
    const gemBank = [];
    for (let color in GAME_CONFIG.TOTAL_GEMS) {
        const count = GAME_CONFIG.TOTAL_GEMS[color];
        for (let i = 0; i < count; i++) {
            gemBank.push(color);
        }
    }

    // Shuffle gems randomly
    const shuffledGems = shuffleArray(gemBank); 

    //Get spiral coordinates
    const spiralCoords = generateSpiralCoordinates(size);

    //place gems based on coordinators
    spiralCoords.forEach((coord, index) => {
        const [row, col] = coord;
        if(index < shuffledGems.length) {
            grid[row][col] = shuffledGems[index];
        }
    });

    return grid;
}

/** Create and initial game states when starting a new game */

export function createInitialGameState() {
    return {
        board: {
            gemGrid: generateGemGrid(),

            availableCards: {
                level1: [],
                level2: [],
                level3: []
            },

            nobles: [ALL_NOBLES],

            priviledgeScrolls: {
                available: 3
            }
        },

        players: [
            createPlayer(0, 'Player', PLAYER_TYPES.HUMAN),
            createPlayer(1, 'AI', PLAYER_TYPES.AI)
        ],

        currentPlayer: 0,
        turn: 1,
        phase: GAME_PHASES.ACTIVE,
        winner: null,
        moveHistory: []
    }
}
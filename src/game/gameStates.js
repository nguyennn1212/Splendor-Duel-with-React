import {GAME_CONFIG, GAME_PHASES, PLAYER_TYPES} from '../data/constants'
import {LEVEL_1_CARDS, LEVEL_2_CARDS, LEVEL_3_CARDS} from '../data/cards'
import {ALL_NOBLES} from '../data/nobles'
import {generateSpiralCoordinates} from '../utils/boardSpiralGenerator'
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

function initializeCardDecks() {
    return {
        level1: shuffleArray(LEVEL_1_CARDS),
        level2: shuffleArray(LEVEL_2_CARDS),
        level3: shuffleArray(LEVEL_3_CARDS)
    };
}

function drawInitalCards(decks) {
    const availableCards = {
        level1: decks.level1.splice(0, 5), // Draws 5 level 1 cards
        level2: decks.level2.splice(0, 4), // Draw 4 level 2 cards
        level3: decks.level3.splice(0, 3) // Draw 3 level 3 cards
    };

    return availableCards;
}

/** Create and initial game states when starting a new game */
export function createInitialGameState() {

    const decks = initializeCardDecks();

    return {
        board: {
            gemGrid: generateGemGrid(),

            availableCards: drawInitalCards(decks),

            nobles: [ALL_NOBLES],

            priviledgeScrolls: {
                available: 3
            }
        },
        
        //placeholder until implemented
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
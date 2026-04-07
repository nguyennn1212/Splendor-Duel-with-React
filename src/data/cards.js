import { GEM_COLORS, ABILITY } from "./constants";

export const LEVEL_1_CARDS = [
    {
        id : 'L1-B-GM', //level, color, ability to take gem
        level: 1,
        color: GEM_COLORS.BLUE,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLACK]: 2
        },
        bonus: GEM_COLORS.BLUE, //player get a permanent gem bonus of this color
        hasCrown: false,
        ability: ABILITY.TAKE_GEM_TOKEN, 
        imageUrl: '' //Add image later(blue gem card with ability)
    },

    {
        id: 'L1-W-GM',
        level: 1,
        color: GEM_COLORS.WHITE,
        points: 0,
        cost: {
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 2
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.TAKE_GEM_TOKEN,
        imageUrl: '' //Add image later (white gem card with ability)
    },

    {
        id: 'L1-G-GM',
        level: 1,
        color: GEM_COLORS.GREEN,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLUE]: 2,
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.TAKE_GEM_TOKEN,
        imageUrl: '' //Add image later (green gem card with ability)
    },

    {
        id: 'L1-BLCK-GM',
        level: 1,
        color: GEM_COLORS.BLACK,
        points: 0,
        cost: {
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 2,
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: false,
        ability: ABILITY.TAKE_GEM_TOKEN,
        imageUrl: '' //Add image later (black gem card with ability)
    },
    
    {
        id: 'L1-R-GM',
        level: 1,
        color: GEM_COLORS.RED,
        points: 0,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 2,
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.TAKE_GEM_TOKEN,
        imageUrl: '' //Add image later (red gem card with ability)
    },    

    {
        id: 'L1-B', //level, color, no ability
        level: 1,
        color: GEM_COLORS.BLUE,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 1,
            [GEM_COLORS.GREEN]: 1,
            [GEM_COLORS.RED]: 1,
            [GEM_COLORS.BLACK]: 1
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //Add image later (lady with blue gem earings)
    },

    {
        id: 'L1-W', //level, color, no ability
        level: 1,
        color: GEM_COLORS.WHITE,
        points: 0,
        cost: {
            [GEM_COLORS.BLUE]: 1,
            [GEM_COLORS.GREEN]: 1,
            [GEM_COLORS.RED]: 1,
            [GEM_COLORS.BLACK]: 1
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //Add image later (lady with white gem earings)
    },    

    {
        id: 'L1-G', //level, color, no ability
        level: 1,
        color: GEM_COLORS.GREEN,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 1,
            [GEM_COLORS.BLUE]: 1,
            [GEM_COLORS.RED]: 1,
            [GEM_COLORS.BLACK]: 1
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //Add image later (lady with green gem earings)
    },
    
    {
        id: 'L1-BLCK', //level, color, no ability
        level: 1,
        color: GEM_COLORS.BLACK,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 1,
            [GEM_COLORS.BLUE]: 1,
            [GEM_COLORS.GREEN]: 1,
            [GEM_COLORS.RED]: 1
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //Add image later (lady with black gem earings)
    },

    {
        id: 'L1-R', //level, color, no ability
        level: 1,
        color: GEM_COLORS.RED,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 1,
            [GEM_COLORS.BLUE]: 1,
            [GEM_COLORS.GREEN]: 1,
            [GEM_COLORS.BLACK]: 1
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //Add image later (lady with red gem earings)
    },
    
    {
        id: 'L1-B-EXTRTRN', //level, color, ability
        level: 1,
        color: GEM_COLORS.BLUE,
        points: 0,
        cost: {
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.EXTRA_TURN,
        imageUrl: '' //add image later (blue gem necklace)
    },
 
    {
        id: 'L1-W-EXTRTRN', //level, color, ability
        level: 1,
        color: GEM_COLORS.WHITE,
        points: 0,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.EXTRA_TURN,
        imageUrl: '' //add image later (white gem necklace)
    },
    
    {
        id: 'L1-G-EXTRTRN', //level, color, ability
        level: 1,
        color: GEM_COLORS.GREEN,
        points: 0,
        cost: {
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.EXTRA_TURN,
        imageUrl: '' //add image later (green gem necklace)
    },
  
    {
        id: 'L1-R-EXTRTRN', //level, color, ability
        level: 1,
        color: GEM_COLORS.RED,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLACK]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.EXTRA_TURN,
        imageUrl: '' //add image later (red gem necklace)
    },
    
    {
        id: 'L1-B-C', //level, color, yes crowns
        level: 1,
        color: GEM_COLORS.BLUE,
        points: 0,
        cost: {
            [GEM_COLORS.GREEN]: 3
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: true,
        crownsParams: {
            count: 1
        },        
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (blue gem crown)
    },

    {
        id: 'L1-W-C', //level, color, yes crowns
        level: 1,
        color: GEM_COLORS.WHITE,
        points: 0,
        cost: {
            [GEM_COLORS.BLUE]: 3
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (white gem crown)
    },    

    {
        id: 'L1-G-C', //level, color, yes crowns
        level: 1,
        color: GEM_COLORS.GREEN,
        points: 0,
        cost: {
            [GEM_COLORS.RED]: 3
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (green gem crown)
    },

    {
        id: 'L1-BLCK-C', //level, color, yes crowns
        level: 1,
        color: GEM_COLORS.BLACK,
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 3
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (black gem crown)
    },
    
    {
        id: 'L1-R-C', //level, color, yes crowns
        level: 1,
        color: GEM_COLORS.RED,
        points: 0,
        cost: {
            [GEM_COLORS.BLACK]: 3
        },
        bonus: GEM_COLORS.RED,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (red gem crown)
    },
    
    {
        id: 'L1-B-P', //level, color, point
        level: 1,
        color: GEM_COLORS.BLUE,
        points: 1,
        cost: {
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 3
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (sword with blue gem)
    },

    {
        id: 'L1-B-P', //level, color, point
        level: 1,
        color: GEM_COLORS.BLUE,
        points: 1,
        cost: {
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 3
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (sword with blue gem)
    },

    {
        id: 'L1-W-P', //level, color, point
        level: 1,
        color: GEM_COLORS.WHITE,
        points: 1,
        cost: {
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 3
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (sword with white gem)
    },
    
    {
        id: 'L1-G-P', //level, color, point
        level: 1,
        color: GEM_COLORS.GREEN,
        points: 1,
        cost: {
            [GEM_COLORS.WHITE]: 3,
            [GEM_COLORS.BLACK]: 2
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (sword with green gem)
    },
    
    {
        id: 'L1-BLCK-P', //level, color, point
        level: 1,
        color: GEM_COLORS.BLACK,
        points: 1,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 3
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (sword with black gem)
    },
    
    {
        id: 'L1-R-P', //level, color, point
        level: 1,
        color: GEM_COLORS.RED,
        points: 1,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLUE]: 3
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (sword with red gem)
    },    

    {
        id: 'L1-C', //level, colorless, crown yes
        level: 1,
        color: null, //colorless cards that can be choose to be any colors as long as the player have a card of said color
        points: 0,
        cost: {
            [GEM_COLORS.WHITE]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (hands crafting)
    },

    {
        id: 'L1-P-1', //level, colorless, point yes
        level: 1,
        color: null, 
        points: 1,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.BLACK]: 1,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: false,
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (hands crafting)
    },
    
    {
        id: 'L1-P-2', //level, colorless, point yes
        level: 1,
        color: null, 
        points: 1,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 1,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: false,
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (hands crafting)
    },
    
    {
        id: 'L1-P-3', //level, colorless, point yes
        level: 1,
        color: null, 
        points: 1,
        cost: {
            [GEM_COLORS.BLACK]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: false,
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (hands crafting)
    },
    
    {
        id: 'L1-P', //level, colorless, points card
        level: 1,
        color: null,
        points: 3,
        cost: {
            [GEM_COLORS.RED]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (hands refining metal)
    }
];

export const LEVEL_2_CARDS = [
    {
        id: 'L2-B-S', //level, color, ability steal
        level: 2,
        color: GEM_COLORS.BLUE,
        points: 1,
        cost: {
            [GEM_COLORS.GREEN]: 4,
            [GEM_COLORS.BLACK]: 3
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.STEAL_GEM,
        imageUrl: '' //add image later (hand stealing blue ring)
    },

    {
        id: 'L2-W-S',
        level: 2,
        color: GEM_COLORS.WHITE,
        points: 1,
        cost: {
            [GEM_COLORS.BLUE]: 4,
            [GEM_COLORS.RED]: 3
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.STEAL_GEM,
        imageUrl: '' //add image later (hand stealing white ring)
    },
 
    {
        id: 'L2-G-S',
        level: 2,
        color: GEM_COLORS.GREEN,
        points: 1,
        cost: {
            [GEM_COLORS.RED]: 4,
            [GEM_COLORS.WHITE]: 3
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.STEAL_GEM,
        imageUrl: '' //add image later (hand stealing green ring)
    },
    
    {
        id: 'L2-BLCK-S',
        level: 2,
        color: GEM_COLORS.BLACK,
        points: 1,
        cost: {
            [GEM_COLORS.WHITE]: 4,
            [GEM_COLORS.GREEN]: 3
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: false,
        ability: ABILITY.STEAL_GEM,
        imageUrl: '' //add image later (hand stealing black ring)
    },
    
    {
        id: 'L2-R-S',
        level: 2,
        color: GEM_COLORS.RED,
        points: 1,
        cost: {
            [GEM_COLORS.BLACK]: 4,
            [GEM_COLORS.BLUE]: 3
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.STEAL_GEM,
        imageUrl: '' //add image later (hand stealing red ring)
    },
    
    {
        id: 'L2-B-P', //level, color, ability priviledge
        level: 2,
        color: GEM_COLORS.BLUE,
        points: 2,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLUE]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.TAKE_PRIVILEDGE,
        imageUrl: '' //add image later (blue S ring)
    },

    {
        id: 'L2-W-P',
        level: 2,
        color: GEM_COLORS.WHITE,
        points: 2,
        cost: {
            [GEM_COLORS.WHITE]: 4,
            [GEM_COLORS.BLACK]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.TAKE_PRIVILEDGE,
        imageUrl: '' //add image later (white S ring)
    },

    {
        id: 'L2-G-P',
        level: 2,
        color: GEM_COLORS.GREEN,
        points: 2,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.TAKE_PRIVILEDGE,
        imageUrl: '' //add image later (green S ring)
    },
    
    {
        id: 'L2-BLCK-P',
        level: 2,
        color: GEM_COLORS.BLACK,
        points: 2,
        cost: {
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: false,
        ability: ABILITY.TAKE_PRIVILEDGE,
        imageUrl: '' //add image later (black S ring)
    },
    
    {
        id: 'L2-R-P',
        level: 2,
        color: GEM_COLORS.RED,
        points: 2,
        cost: {
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 4,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.TAKE_PRIVILEDGE,
        imageUrl: '' //add image later (red S ring)
    },
    
    {
        id: 'L2-B-C', //level, color, crown yes
        level: 2,
        color: GEM_COLORS.BLUE,
        points: 2,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (blue crown in a box)
    },

    {
        id: 'L2-W-C', //level, color, crown yes
        level: 2,
        color: GEM_COLORS.WHITE,
        points: 2,
        cost: {
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (white crown in a box)
    },
    
    {
        id: 'L2-G-C', //level, color, crown yes
        level: 2,
        color: GEM_COLORS.GREEN,
        points: 2,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.BLACK]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (green crown in a box)
    },
    
    {
        id: 'L2-BLCK-C', //level, color, crown yes
        level: 2,
        color: GEM_COLORS.BLACK,
        points: 2,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (black crown in a box)
    },
    
    {
        id: 'L2-R-C', //level, color, crown yes
        level: 2,
        color: GEM_COLORS.RED,
        points: 2,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.RED,
        hasCrown: true,
        crownsParams: {
            count: 1
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (red crown in a box)
    },
    
    {
        id: 'L2-B-GM', //level, color, extra gem
        level: 2,
        color: GEM_COLORS.BLUE,
        points: 1,
        cost: {
            [GEM_COLORS.GREEN]: 5,
            [GEM_COLORS.RED]: 2
        },
        bonus: GEM_COLORS.BLUE,
        bonusParams: {
            count: 2 //add 2 permanent gems when the player aquire this card
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (blue rings on hand)
    },

    {
        id: 'L2-W-GM', //level, color, extra gem
        level: 2,
        color: GEM_COLORS.WHITE,
        points: 1,
        cost: {
            [GEM_COLORS.BLUE]: 5,
            [GEM_COLORS.GREEN]: 2
        },
        bonus: GEM_COLORS.WHITE,
        bonusParams: {
            count: 2
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (white rings on hand)
    },
    
    {
        id: 'L2-G-GM', //level, color, extra gem
        level: 2,
        color: GEM_COLORS.GREEN,
        points: 1,
        cost: {
            [GEM_COLORS.RED]: 5,
            [GEM_COLORS.BLACK]: 2
        },
        bonus: GEM_COLORS.GREEN,
        bonusParams: {
            count: 2
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (green rings on hand)
    },

    {
        id: 'L2-BLCK-GM', //level, color, extra gem
        level: 2,
        color: GEM_COLORS.BLACK,
        points: 1,
        cost: {
            [GEM_COLORS.WHITE]: 5,
            [GEM_COLORS.BLUE]: 2
        },
        bonus: GEM_COLORS.BLACK,
        bonusParams: {
            count: 2
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (black rings on hand)
    },    
    
    {
        id: 'L2-R-GM', //level, color, extra gem
        level: 2,
        color: GEM_COLORS.RED,
        points: 1,
        cost: {
            [GEM_COLORS.BLACK]: 5,
            [GEM_COLORS.WHITE]: 2
        },
        bonus: GEM_COLORS.RED,
        bonusParams: {
            count: 2
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (red rings on hand)
    },
    
    {
        id: 'L2-P-1', //level, colorless, point
        level: 2,
        color: GEM_COLORS.NONE,
        points: 2,
        cost: {
            [GEM_COLORS.GREEN]: 6,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: false,
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (making ring)
    },

    {
        id: 'L2-C-2', //level, colorless, crowns
        level: 2,
        color: GEM_COLORS.NONE,
        points: 2,
        cost: {
            [GEM_COLORS.GREEN]: 6,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (making ring)
    },
    
    {
        id: 'L2-C-3', //level, colorless, crowns
        level: 2,
        color: GEM_COLORS.NONE,
        points: 2,
        cost: {
            [GEM_COLORS.BLUE]: 6,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (making ring)
    },
    
    {
        id: 'L2-P', //level 2, the point card
        level: 2,
        color: GEM_COLORS.NONE,
        points: 5,
        cost: {
            [GEM_COLORS.BLUE]: 6,
            [GEM_COLORS.PEARL]: 1
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (making sovereign's orb)
    }    
];

export const LEVEL_3_CARDS = [
    {
        id: 'L3-B-C', //level, color, crowns yes
        level: 3,
        color: GEM_COLORS.BLUE,
        points: 3,
        cost: {
            [GEM_COLORS.WHITE]: 3,
            [GEM_COLORS.GREEN]: 3,
            [GEM_COLORS.BLACK]: 5,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later(blue gem crown)
    },

    {
        id: 'L3-W-C', //level, color, crowns yes
        level: 3,
        color: GEM_COLORS.WHITE,
        points: 3,
        cost: {
            [GEM_COLORS.BLUE]: 3,
            [GEM_COLORS.RED]: 5,
            [GEM_COLORS.BLACK]: 3,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later(white gem crown)
    },
    
    {
        id: 'L3-G-C', //level, color, crowns yes
        level: 3,
        color: GEM_COLORS.GREEN,
        points: 3,
        cost: {
            [GEM_COLORS.WHITE]: 5,
            [GEM_COLORS.BLUE]: 3,
            [GEM_COLORS.RED]: 3,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later(green gem crown)
    },
    
    {
        id: 'L3-BLCK-C', //level, color, crowns yes
        level: 3,
        color: GEM_COLORS.BLACK,
        points: 3,
        cost: {
            [GEM_COLORS.WHITE]: 3,
            [GEM_COLORS.GREEN]: 5,
            [GEM_COLORS.RED]: 3,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later(black gem crown)
    },
    
    {
        id: 'L3-R-C', //level, color, crowns yes
        level: 3,
        color: GEM_COLORS.RED,
        points: 3,
        cost: {
            [GEM_COLORS.BLUE]: 5,
            [GEM_COLORS.GREEN]: 3,
            [GEM_COLORS.BLACK]: 3,
            [GEM_COLORS.PEARL]: 1
        },
        bonus: GEM_COLORS.RED,
        hasCrown: true,
        crownsParams: {
            count: 2
        },
        ability: ABILITY.NONE,
        imageUrl: '' //add image later(red gem crown)
    },
    
    {
        id: 'L3-B-P', //level, color, point
        level: 3,
        color: GEM_COLORS.BLUE,
        points: 4,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.BLUE]: 6,
            [GEM_COLORS.GREEN]: 2
        },
        bonus: GEM_COLORS.BLUE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (blue gem necklace)
    },

    {
        id: 'L3-W-P', //level, color, point
        level: 3,
        color: GEM_COLORS.WHITE,
        points: 4,
        cost: {
            [GEM_COLORS.WHITE]: 6,
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.BLACK]: 2
        },
        bonus: GEM_COLORS.WHITE,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (white gem necklace)
    },
    
    {
        id: 'L3-G-P', //level, color, point
        level: 3,
        color: GEM_COLORS.GREEN,
        points: 4,
        cost: {
            [GEM_COLORS.BLUE]: 2,
            [GEM_COLORS.GREEN]: 6,
            [GEM_COLORS.RED]: 2
        },
        bonus: GEM_COLORS.GREEN,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (green gem necklace)
    },
    
    {
        id: 'L3-BLCK-P', //level, color, point
        level: 3,
        color: GEM_COLORS.BLACK,
        points: 4,
        cost: {
            [GEM_COLORS.WHITE]: 2,
            [GEM_COLORS.RED]: 2,
            [GEM_COLORS.BLACK]: 6
        },
        bonus: GEM_COLORS.BLACK,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (black gem necklace)
    },
    
    {
        id: 'L3-R-P', //level, color, point
        level: 3,
        color: GEM_COLORS.RED,
        points: 4,
        cost: {
            [GEM_COLORS.GREEN]: 2,
            [GEM_COLORS.RED]: 6,
            [GEM_COLORS.BLACK]: 2
        },
        bonus: GEM_COLORS.RED,
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (red gem necklace)
    },
    
    {
        id: 'L3-C', //level, the crown card
        level: 3,
        color: GEM_COLORS.NONE,
        points: 0,
        cost: {
            [GEM_COLORS.BLACK]: 8
        },
        hasCrown: true,
        crownsParams: {
            count: 3
        },
        ability: ABILITY.MATCHING_TOKEN,
        imageUrl: '' //add image later (adding gem to gold crown)
    },

    {
        id: 'L3-A', //level, the ability card
        level: 3,
        color: GEM_COLORS.NONE,
        point: 3,
        cost: {
            [GEM_COLORS.RED]: 8
        },
        hasCrown: false,
        ability: ABILITY.MATCHING_TOKEN,
        ability2: ABILITY.EXTRA_TURN,
        imageUrl: '' //add image later (add gem to Sovergein's Sceptra)
    },

    {
        id: 'L3-P', //level the point card
        level: 3,
        color: GEM_COLORS.NONE,
        point: 6,
        cost: {
            [GEM_COLORS.WHITE]: 8
        },
        hasCrown: false,
        ability: ABILITY.NONE,
        imageUrl: '' //add image later (finish making Sovergein's orb)
    }
];
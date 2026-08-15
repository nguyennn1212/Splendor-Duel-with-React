import { ABILITY, GEM_COLORS } from "./constant";

function createGemCard({
  id,
  level,
  color,
  points,
  cost,
  bonus,
  crowns,
  ability,
  imgUrl,
}) {
  return { id, level, color, points, cost, bonus, crowns, ability, imgUrl };
}

export const LEVEL_1_CARDS = [
  createGemCard({
    id: "L1-B-GM",
    level: 1,
    color: GEM_COLORS.BLUE,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLACK]: 2,
    },
    bonus: GEM_COLORS.BLUE, //get a permanent bonus of this color
    crowns: 0,
    ability: ABILITY.TAKE_GEM_TOKEN,
    imgUrl: "",
  }),

  createGemCard({
    id: "L1-W-GM",
    level: 1,
    color: GEM_COLORS.WHITE,
    points: 0,
    cost: {
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 2,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.TAKE_GEM_TOKEN,
    imgUrl: "", //Add image later (white gem card with ability)
  }),

  createGemCard({
    id: "L1-G-GM",
    level: 1,
    color: GEM_COLORS.GREEN,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLUE]: 2,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.TAKE_GEM_TOKEN,
    imgUrl: "", //Add image later (green gem card with ability)
  }),

  createGemCard({
    id: "L1-BLCK-GM",
    level: 1,
    color: GEM_COLORS.BLACK,
    points: 0,
    cost: {
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 2,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.TAKE_GEM_TOKEN,
    imgUrl: "", //Add image later (black gem card with ability)
  }),

  createGemCard({
    id: "L1-R-GM",
    level: 1,
    color: GEM_COLORS.RED,
    points: 0,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 2,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.TAKE_GEM_TOKEN,
    imgUrl: "", //Add image later (red gem card with ability)
  }),

  createGemCard({
    id: "L1-B",
    level: 1,
    color: GEM_COLORS.BLUE,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 1,
      [GEM_COLORS.GREEN]: 1,
      [GEM_COLORS.RED]: 1,
      [GEM_COLORS.BLACK]: 1,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //Add image later (lady with blue gem earings)
  }),

  createGemCard({
    id: "L1-W",
    level: 1,
    color: GEM_COLORS.WHITE,
    points: 0,
    cost: {
      [GEM_COLORS.BLUE]: 1,
      [GEM_COLORS.GREEN]: 1,
      [GEM_COLORS.RED]: 1,
      [GEM_COLORS.BLACK]: 1,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //Add image later (lady with white gem earings)
  }),

  createGemCard({
    id: "L1-G",
    level: 1,
    color: GEM_COLORS.GREEN,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 1,
      [GEM_COLORS.BLUE]: 1,
      [GEM_COLORS.RED]: 1,
      [GEM_COLORS.BLACK]: 1,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //Add image later (lady with green gem earings)
  }),

  createGemCard({
    id: "L1-BLCK",
    level: 1,
    color: GEM_COLORS.BLACK,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 1,
      [GEM_COLORS.BLUE]: 1,
      [GEM_COLORS.GREEN]: 1,
      [GEM_COLORS.RED]: 1,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //Add image later (lady with black gem earings)
  }),

  createGemCard({
    id: "L1-R",
    level: 1,
    color: GEM_COLORS.RED,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 1,
      [GEM_COLORS.BLUE]: 1,
      [GEM_COLORS.GREEN]: 1,
      [GEM_COLORS.BLACK]: 1,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //Add image later (lady with red gem earings)
  }),

  createGemCard({
    id: "L1-B-EXTRTRN",
    level: 1,
    color: GEM_COLORS.BLUE,
    points: 0,
    cost: {
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.EXTRA_TURN,
    imgUrl: "", //add image later (blue gem necklace)
  }),

  createGemCard({
    id: "L1-W-EXTRTRN",
    level: 1,
    color: GEM_COLORS.WHITE,
    points: 0,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.EXTRA_TURN,
    imgUrl: "", //add image later (white gem necklace)
  }),

  createGemCard({
    id: "L1-G-EXTRTRN",
    level: 1,
    color: GEM_COLORS.GREEN,
    points: 0,
    cost: {
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.EXTRA_TURN,
    imgUrl: "", //add image later (green gem necklace)
  }),

  createGemCard({
    id: "L1-R-EXTRTRN",
    level: 1,
    color: GEM_COLORS.RED,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLACK]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.EXTRA_TURN,
    imgUrl: "", //add image later (red gem necklace)
  }),

  createGemCard({
    id: "L1-B-C",
    level: 1,
    color: GEM_COLORS.BLUE,
    points: 0,
    cost: {
      [GEM_COLORS.GREEN]: 3,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (blue gem crown)
  }),

  createGemCard({
    id: "L1-W-C",
    level: 1,
    color: GEM_COLORS.WHITE,
    points: 0,
    cost: {
      [GEM_COLORS.BLUE]: 3,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (white gem crown)
  }),

  createGemCard({
    id: "L1-G-C",
    level: 1,
    color: GEM_COLORS.GREEN,
    points: 0,
    cost: {
      [GEM_COLORS.RED]: 3,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (green gem crown)
  }),

  createGemCard({
    id: "L1-BLCK-C",
    level: 1,
    color: GEM_COLORS.BLACK,
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 3,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (black gem crown)
  }),

  createGemCard({
    id: "L1-R-C",
    level: 1,
    color: GEM_COLORS.RED,
    points: 0,
    cost: {
      [GEM_COLORS.BLACK]: 3,
    },
    bonus: GEM_COLORS.RED,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (red gem crown)
  }),

  createGemCard({
    id: "L1-B-P",
    level: 1,
    color: GEM_COLORS.BLUE,
    points: 1,
    cost: {
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 3,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (sword with blue gem)
  }),

  createGemCard({
    id: "L1-B-P",
    level: 1,
    color: GEM_COLORS.BLUE,
    points: 1,
    cost: {
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 3,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (sword with blue gem)
  }),

  createGemCard({
    id: "L1-W-P",
    level: 1,
    color: GEM_COLORS.WHITE,
    points: 1,
    cost: {
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 3,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (sword with white gem)
  }),

  createGemCard({
    id: "L1-G-P",
    level: 1,
    color: GEM_COLORS.GREEN,
    points: 1,
    cost: {
      [GEM_COLORS.WHITE]: 3,
      [GEM_COLORS.BLACK]: 2,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (sword with green gem)
  }),

  createGemCard({
    id: "L1-BLCK-P",
    level: 1,
    color: GEM_COLORS.BLACK,
    points: 1,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 3,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (sword with black gem)
  }),

  createGemCard({
    id: "L1-R-P",
    level: 1,
    color: GEM_COLORS.RED,
    points: 1,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLUE]: 3,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (sword with red gem)
  }),

  createGemCard({
    id: "L1-C",
    level: 1,
    color: null, //colorless cards that can be choose to be any colors as long as the player have a card of said color
    points: 0,
    cost: {
      [GEM_COLORS.WHITE]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 1,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (hands crafting)
  }),

  createGemCard({
    id: "L1-P-1",
    level: 1,
    color: null,
    points: 1,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.BLACK]: 1,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 0,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (hands crafting)
  }),

  createGemCard({
    id: "L1-P-2",
    level: 1,
    color: null,
    points: 1,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 1,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 0,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (hands crafting)
  }),

  createGemCard({
    id: "L1-P-3",
    level: 1,
    color: null,
    points: 1,
    cost: {
      [GEM_COLORS.BLACK]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 0,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (hands crafting)
  }),

  createGemCard({
    id: "L1-P",
    level: 1,
    color: null,
    points: 3,
    cost: {
      [GEM_COLORS.RED]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (hands refining metal)
  }),
];

export const LEVEL_2_CARDS = [
  createGemCard({
    id: "L2-B-S",
    level: 2,
    color: GEM_COLORS.BLUE,
    points: 1,
    cost: {
      [GEM_COLORS.GREEN]: 4,
      [GEM_COLORS.BLACK]: 3,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.STEAL_GEM,
    imgUrl: "", //add image later (hand stealing blue ring)
  }),

  createGemCard({
    id: "L2-W-S",
    level: 2,
    color: GEM_COLORS.WHITE,
    points: 1,
    cost: {
      [GEM_COLORS.BLUE]: 4,
      [GEM_COLORS.RED]: 3,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.STEAL_GEM,
    imgUrl: "", //add image later (hand stealing white ring)
  }),

  createGemCard({
    id: "L2-G-S",
    level: 2,
    color: GEM_COLORS.GREEN,
    points: 1,
    cost: {
      [GEM_COLORS.RED]: 4,
      [GEM_COLORS.WHITE]: 3,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.STEAL_GEM,
    imgUrl: "", //add image later (hand stealing green ring)
  }),

  createGemCard({
    id: "L2-BLCK-S",
    level: 2,
    color: GEM_COLORS.BLACK,
    points: 1,
    cost: {
      [GEM_COLORS.WHITE]: 4,
      [GEM_COLORS.GREEN]: 3,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.STEAL_GEM,
    imgUrl: "", //add image later (hand stealing black ring)
  }),

  createGemCard({
    id: "L2-R-S",
    level: 2,
    color: GEM_COLORS.RED,
    points: 1,
    cost: {
      [GEM_COLORS.BLACK]: 4,
      [GEM_COLORS.BLUE]: 3,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.STEAL_GEM,
    imgUrl: "", //add image later (hand stealing red ring)
  }),

  createGemCard({
    id: "L2-B-P",
    level: 2,
    color: GEM_COLORS.BLUE,
    points: 2,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLUE]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.TAKE_PRIVILEDGE,
    imgUrl: "", //add image later (blue S ring)
  }),

  createGemCard({
    id: "L2-W-P",
    level: 2,
    color: GEM_COLORS.WHITE,
    points: 2,
    cost: {
      [GEM_COLORS.WHITE]: 4,
      [GEM_COLORS.BLACK]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.TAKE_PRIVILEDGE,
    imgUrl: "", //add image later (white S ring)
  }),

  createGemCard({
    id: "L2-G-P",
    level: 2,
    color: GEM_COLORS.GREEN,
    points: 2,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.TAKE_PRIVILEDGE,
    imgUrl: "", //add image later (green S ring)
  }),

  createGemCard({
    id: "L2-BLCK-P",
    level: 2,
    color: GEM_COLORS.BLACK,
    points: 2,
    cost: {
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.TAKE_PRIVILEDGE,
    imgUrl: "", //add image later (black S ring)
  }),

  createGemCard({
    id: "L2-R-P",
    level: 2,
    color: GEM_COLORS.RED,
    points: 2,
    cost: {
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 4,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.TAKE_PRIVILEDGE,
    imgUrl: "", //add image later (red S ring)
  }),

  createGemCard({
    id: "L2-B-C",
    level: 2,
    color: GEM_COLORS.BLUE,
    points: 2,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (blue crown in a box)
  }),

  createGemCard({
    id: "L2-W-C",
    level: 2,
    color: GEM_COLORS.WHITE,
    points: 2,
    cost: {
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (white crown in a box)
  }),

  createGemCard({
    id: "L2-G-C",
    level: 2,
    color: GEM_COLORS.GREEN,
    points: 2,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.BLACK]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (green crown in a box)
  }),

  createGemCard({
    id: "L2-BLCK-C",
    level: 2,
    color: GEM_COLORS.BLACK,
    points: 2,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (black crown in a box)
  }),

  createGemCard({
    id: "L2-R-C",
    level: 2,
    color: GEM_COLORS.RED,
    points: 2,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.RED,
    crowns: 1,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (red crown in a box)
  }),

  createGemCard({
    id: "L2-B-GM",
    level: 2,
    color: GEM_COLORS.BLUE,
    points: 1,
    cost: {
      [GEM_COLORS.GREEN]: 5,
      [GEM_COLORS.RED]: 2,
    },
    bonus: GEM_COLORS.BLUE, //add 2 permanent gems when the player aquire this card
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (blue rings on hand)
  }),

  createGemCard({
    id: "L2-W-GM",
    level: 2,
    color: GEM_COLORS.WHITE,
    points: 1,
    cost: {
      [GEM_COLORS.BLUE]: 5,
      [GEM_COLORS.GREEN]: 2,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (white rings on hand)
  }),

  createGemCard({
    id: "L2-G-GM",
    level: 2,
    color: GEM_COLORS.GREEN,
    points: 1,
    cost: {
      [GEM_COLORS.RED]: 5,
      [GEM_COLORS.BLACK]: 2,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (green rings on hand)
  }),

  createGemCard({
    id: "L2-BLCK-GM",
    level: 2,
    color: GEM_COLORS.BLACK,
    points: 1,
    cost: {
      [GEM_COLORS.WHITE]: 5,
      [GEM_COLORS.BLUE]: 2,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (black rings on hand)
  }),

  createGemCard({
    id: "L2-R-GM",
    level: 2,
    color: GEM_COLORS.RED,
    points: 1,
    cost: {
      [GEM_COLORS.BLACK]: 5,
      [GEM_COLORS.WHITE]: 2,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (red rings on hand)
  }),

  createGemCard({
    id: "L2-P-1",
    level: 2,
    color: GEM_COLORS.NONE,
    points: 2,
    cost: {
      [GEM_COLORS.GREEN]: 6,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 0,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (making ring)
  }),

  createGemCard({
    id: "L2-C-2",
    level: 2,
    color: GEM_COLORS.NONE,
    points: 2,
    cost: {
      [GEM_COLORS.GREEN]: 6,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 2,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (making ring)
  }),

  createGemCard({
    id: "L2-C-3",
    level: 2,
    color: GEM_COLORS.NONE,
    points: 2,
    cost: {
      [GEM_COLORS.BLUE]: 6,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 2,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (making ring)
  }),

  createGemCard({
    id: "L2-P",
    level: 2,
    color: GEM_COLORS.NONE,
    points: 5,
    cost: {
      [GEM_COLORS.BLUE]: 6,
      [GEM_COLORS.PEARL]: 1,
    },
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (making sovereign's orb)
  }),
];

export const LEVEL_3_CARDS = [
  createGemCard({
    id: "L3-B-C",
    level: 3,
    color: GEM_COLORS.BLUE,
    points: 3,
    cost: {
      [GEM_COLORS.WHITE]: 3,
      [GEM_COLORS.GREEN]: 3,
      [GEM_COLORS.BLACK]: 5,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 2,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later(blue gem crown)
  }),

  createGemCard({
    id: "L3-W-C",
    level: 3,
    color: GEM_COLORS.WHITE,
    points: 3,
    cost: {
      [GEM_COLORS.BLUE]: 3,
      [GEM_COLORS.RED]: 5,
      [GEM_COLORS.BLACK]: 3,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 2,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later(white gem crown)
  }),

  createGemCard({
    id: "L3-G-C",
    level: 3,
    color: GEM_COLORS.GREEN,
    points: 3,
    cost: {
      [GEM_COLORS.WHITE]: 5,
      [GEM_COLORS.BLUE]: 3,
      [GEM_COLORS.RED]: 3,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 2,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later(green gem crown)
  }),

  createGemCard({
    id: "L3-BLCK-C",
    level: 3,
    color: GEM_COLORS.BLACK,
    points: 3,
    cost: {
      [GEM_COLORS.WHITE]: 3,
      [GEM_COLORS.GREEN]: 5,
      [GEM_COLORS.RED]: 3,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 2,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later(black gem crown)
  }),

  createGemCard({
    id: "L3-R-C",
    level: 3,
    color: GEM_COLORS.RED,
    points: 3,
    cost: {
      [GEM_COLORS.BLUE]: 5,
      [GEM_COLORS.GREEN]: 3,
      [GEM_COLORS.BLACK]: 3,
      [GEM_COLORS.PEARL]: 1,
    },
    bonus: GEM_COLORS.RED,
    crowns: 2,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later(red gem crown)
  }),

  createGemCard({
    id: "L3-B-P",
    level: 3,
    color: GEM_COLORS.BLUE,
    points: 4,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.BLUE]: 6,
      [GEM_COLORS.GREEN]: 2,
    },
    bonus: GEM_COLORS.BLUE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (blue gem necklace)
  }),

  createGemCard({
    id: "L3-W-P",
    level: 3,
    color: GEM_COLORS.WHITE,
    points: 4,
    cost: {
      [GEM_COLORS.WHITE]: 6,
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.BLACK]: 2,
    },
    bonus: GEM_COLORS.WHITE,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (white gem necklace)
  }),

  createGemCard({
    id: "L3-G-P",
    level: 3,
    color: GEM_COLORS.GREEN,
    points: 4,
    cost: {
      [GEM_COLORS.BLUE]: 2,
      [GEM_COLORS.GREEN]: 6,
      [GEM_COLORS.RED]: 2,
    },
    bonus: GEM_COLORS.GREEN,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (green gem necklace)
  }),

  createGemCard({
    id: "L3-BLCK-P",
    level: 3,
    color: GEM_COLORS.BLACK,
    points: 4,
    cost: {
      [GEM_COLORS.WHITE]: 2,
      [GEM_COLORS.RED]: 2,
      [GEM_COLORS.BLACK]: 6,
    },
    bonus: GEM_COLORS.BLACK,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (black gem necklace)
  }),

  createGemCard({
    id: "L3-R-P",
    level: 3,
    color: GEM_COLORS.RED,
    points: 4,
    cost: {
      [GEM_COLORS.GREEN]: 2,
      [GEM_COLORS.RED]: 6,
      [GEM_COLORS.BLACK]: 2,
    },
    bonus: GEM_COLORS.RED,
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (red gem necklace)
  }),

  createGemCard({
    id: "L3-C",
    level: 3,
    color: GEM_COLORS.NONE,
    points: 0,
    cost: {
      [GEM_COLORS.BLACK]: 8,
    },
    crowns: 3,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (adding gem to gold crown)
  }),

  createGemCard({
    id: "L3-A",
    level: 3,
    color: GEM_COLORS.NONE,
    points: 3,
    cost: {
      [GEM_COLORS.RED]: 8,
    },
    crowns: 0,
    ability: ABILITY.MATCHING_TOKEN,
    imgUrl: "", //add image later (add gem to Sovergein's Sceptra)
  }),

  createGemCard({
    id: "L3-P",
    level: 3,
    color: GEM_COLORS.NONE,
    points: 6,
    cost: {
      [GEM_COLORS.WHITE]: 8,
    },
    crowns: 0,
    ability: ABILITY.NONE,
    imgUrl: "", //add image later (finish making Sovergein's orb)
  }),
];

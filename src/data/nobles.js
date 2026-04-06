import { NOBLE_REQUIREMENT, ABILITY } from "./constants";

export const ALL_NOBLES = [
    {
        id: 'noble-1',
        points: 2,
        ability: ABILITY.TAKE_PRIVILEDGE,
        abilityParams: {
            count: 1,
            description: 'Immediately take 1 priviledge scroll'
        },
        imageURL: '' //add image later once assests is set up (privilege scrolls holding noble)
    },

    {
        id: 'noble-2',
        points: 2,
        ability: ABILITY.EXTRA_TURN,
        abilityParams: {
            count: 0,
            description: "Take an extra turn"
        },
        imageURL: '' //add image later (noble a large hat)
    },

    {
        id: 'noble-3',
        points: 2,
        ability: ABILITY.STEAL_GEM,
        abilityParams: {
            count: 1,
            description: "Take one gem from your opponent, cannot take gold"
        },
        imageURL: '' //add image later (noble that look like Robin Hood)
    },

    {
        id: 'noble-4',
        points: 3,
        ability: ABILITY.NONE,
        abilityParams: {
            count: 0,
            description: "Add one point more than other nobles"
        },
        imageURL: '' //add image later (female noble that look like a queen)
    }
]
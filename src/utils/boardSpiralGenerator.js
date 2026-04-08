/** 
 * Generate spiral coordinates for a 5x5 grid board
 * Return array of [row, col] coordinates in spiral orders
 */

export function generateSpiralCoordinates(size = 5) {
    const coords = []; //list of coordinates
    const center = Math.floor(size/2);

    coords.push([center, center]);

    let row = center;
    let col = center;
    let step = 1;

    while (coords.length < size * size) {
        //move down 'step' times
        for (let i = 0; i < step && coords.length < size * size; i++) {
            row++;
            // if valid position push to coords
            if(isValidPosition(row, col, size)) {
                coords.push([row, col]);
            }
        }

        for(let i =0; i < step && coords.length < size * size; i++) {
            col--;
            if(isValidPosition(row, col, size)) {
                coords.push([row, col]);
            }
        }

        step++; //increase step every 2 moves

        for(let i =0; i < step && coords.length < size * size; i++) {
            row--;

            if(isValidPosition(row, col, size)) {
                coords.push([row, col]);
            }
        }

        for(let i = 0; i < step && coords.length < size * size; i++) {
            col++;

            if(isValidPosition(row, col, size)) {
                coords.push([row, col]);
            }            
        }

        step++; //increase step every 2 moves
    }

    return coords;

}

/** Check if the coordinations is within the "wall" of the board */

function isValidPosition(row, col, size) {
    return row >=0 && row < size && col >=0 && col < size;
}

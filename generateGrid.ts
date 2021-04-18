import { v4 as uuid } from 'uuid';
import {GridCell} from './types';
import {getConfig} from "./getConfig";

const args = process.argv.slice(2);

const config = getConfig(args[0]);

export function generateGrid(width: number, height: number): GridCell[] {
    if(width <= 0 || height <= 0) {
        throw new Error('invalid input params: width and height must be more than 0');
    }
    const numberOfColumns = Math.ceil(width/config.gridSquareSize);
    const numberOfRows = Math.ceil(height/config.gridSquareSize);

    const grid = new Array(numberOfRows * numberOfColumns);

    for (let i = 0; i < numberOfRows; ++i) {
        for (let j = 0; j < numberOfColumns; ++j) {
            grid[i * numberOfColumns + j] = {
                x: j*config.gridSquareSize,
                y: i*config.gridSquareSize,
                id: uuid(),
            }
        }
    }

    return grid;
}

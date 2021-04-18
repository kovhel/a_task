import {Dimension, GridCell, Rect, Location} from "./types";
import {getConfig} from "./getConfig";
import {cellToRect, intersects} from "./utils";

const args = process.argv.slice(2);

const config = getConfig(args[0]);

// assuming we are centring viewPort based on user location if possible
// if not possible e.g. user is near the edge - expanding visible rect to opposite side(s)
export function filterVisibleGrid(
    fullGrid: GridCell[],
    spaceDimensions: Dimension,
    viewPortDimensions: Dimension,
    userLocation: Location,
): GridCell[] {
    const visibleRect = getVisibleRect(spaceDimensions, viewPortDimensions, userLocation);

    return fullGrid.filter(cell =>
        intersects(cellToRect(cell, config.gridSquareSize), visibleRect));
}

function getVisibleRect(
    spaceDimensions: Dimension,
    viewPortDimensions: Dimension,
    userLocation: Location,
): Rect {
    // overflows are always negative numbers if exists
    const leftOverflow = userLocation.x - viewPortDimensions.width/2;
    const hasLeftOverflow = leftOverflow < 0;
    const rightOverflow = spaceDimensions.width - (userLocation.x + viewPortDimensions.width/2);
    const hasRightOverflow = rightOverflow < 0;
    const topOverflow = userLocation.y - viewPortDimensions.height/2;
    const hasTopOverflow = topOverflow < 0;
    const bottomOverflow = spaceDimensions.height - (userLocation.y + viewPortDimensions.height/2);
    const hasBottomOverflow = bottomOverflow < 0;

    return {
        left: !hasRightOverflow ?
            Math.max(userLocation.x - viewPortDimensions.width/2, 0) :
            Math.max(userLocation.x - viewPortDimensions.width/2 + rightOverflow, 0),
        right: !hasLeftOverflow ?
            Math.min(userLocation.x + viewPortDimensions.width/2, spaceDimensions.width):
            Math.min(userLocation.x + viewPortDimensions.width/2 - leftOverflow, spaceDimensions.width),
        top: !hasBottomOverflow ?
            Math.max(userLocation.y - viewPortDimensions.height/2, 0):
            Math.max(userLocation.y - viewPortDimensions.height/2 + bottomOverflow, 0),
        bottom: !hasTopOverflow ?
            Math.min(userLocation.y + viewPortDimensions.height/2, spaceDimensions.height):
            Math.min(userLocation.y + viewPortDimensions.height/2 - topOverflow, spaceDimensions.height)
    };
}

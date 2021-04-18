import {Rect, Location} from "./types";

export function intersects(r1: Rect, r2: Rect) {
    return !(r2.left >= r1.right ||
        r2.right <= r1.left ||
        r2.top >= r1.bottom ||
        r2.bottom <= r1.top);
}

export function cellToRect(location: Location, size: number) {
    return {
        left: location.x,
        top: location.y,
        right: location.x + size,
        bottom: location.y + size,
    }
}

export type Config = {
    gridSquareSize: number;
}

export type Location = {
    x: number;
    y: number;
}

export type GridCell = Location &{
    id: string;
}

export type Dimension = {
    width: number;
    height: number;
}

export type Rect = {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

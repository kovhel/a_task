# Grid task

Improve:
- linter
- unit tests: 
    test each function, including edge cases
- add input validation(functions/config)
- improve system of error handling (reading file, params)

Test cases for the intersects function:
- intersected rects from:
    - each side only
    - corners
 - rect inside another rect
 - rects are not intersecting, positioned to different sides
 
 Test cases for filterVisibleGrid:
 - small visible area: inside one cell
 - visible area that spans over several cells
 - user is near the borders (each border/corner)
 - visible area ends on the border of cell (not including next cell)
 
 Test cases for generateGrid:
 - width/height is smaller than 1 cell
 - width/height is larger than a cell
 - width/height is/is not multiple of cell size
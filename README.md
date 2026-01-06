# Learnp5js

# Stuff
- coordinate system is (0,0) top left; x --> right; y --> down
- When drawing order matters
- shapes are instructions, not objects

# Reference
## createCanvas(width, height, [P2D/WEBGL/canvas], canvas)
Should only be called once at the beginning of setup

### Parameters
- Parameter 1 & 2: Width/Height. Optional in pixels. Default is 100/100
- Parameter 3: Optional.  Sets the sketch render mode

    If an existing HTMLCanvasElement is passed createCanvas(900, 500, 
    myCanvas) then it will be used by the sketch

- Parameter 4: Optional.  If an existing HTMLCanvasElement is passed 
createCanvas(900, 500, myCanvas) then it will be used by the sketch

### Returns
P5.Renderer: new p5.Renderer that holds the canvas

## elipse(x, y, w, [h, detail])
Draws an ellipse (Oval)

Anchor is center.

An ellipse is a round shape defined by the _x, y, w, and h_ parameters.
_x_ and _y_ set the location of its center (anchor). _w_ and _h_ set 
its width and height.  See _ellipseMode()_ for other ways to set 
position.

If no height is set, the value of width is used for both the width and 
height.  If a negative height or width is specified, the absolute
value is taken.

The fifth parameter, _detail_, is also optional. It determines how
many vertices are used to draw the ellipse in WEBGL mode.  The default
is 25.

## line(x1, y1, x2, y2, z1, z2)
Draws a straight line between two points.

A line's default width is one pixel.  The version of _line()_ with four
parameters draws the line in 2D.  To color a line, use the _stroke()_
function. To change its width, use the _strokeWeight()_ function.  A 
line can't be filled, so the _fill()_ function won't affect the lines
color.

The version of _line()_ with six parameters allows the line to be 
drawn in 3D space.  Doing so requires adding the WEBGL argument to
_createCanvas()_

## rect(x, y, w, h, [[r], [ltr, rtr, rbr, lbr]])
Draws a rectangle

Anchor is top left

A rectangle is a four sided shape defined by the _x, y, w, h_ parameters.
_x_ and _y_ set the location of its top-left corner. _w_ sets the width
and _h_ sets the height.  Every angle in the rectangle measures 90°. See
_rectMode()_ for other ways to define rectangles.

The version of _rect()_ with five parameters creates a rounded
rectangle.  The fifth parameter sets the radius for all four corners.

The version of _rect()_ with eight parameters also creates a rounded
rectangle.  Each of the last four parameters set the radius of a 
corner. The radii start with the to-left corner and move clockwise
around the rectangle. If any of these parameters are ommitted, they
are set to the value of the last radius set.

## rectMode(CONSTANT)
Changes where rectangles and squares are drawn.

By default, the first two parameters of _rect_ and _square_ are the x-
and y-coordinates of the shapes upper left corner.  The next parameters
set the shape's width and height.  This is the same as calling 
_rectMode(CORNER)_.  

_rectMode(CORNERS)_ also uses the first two paramters as the location
of one of the corners.  The next parameters are the location of the
opposite corener.  This mode only works for _rect()_

_rectMode(CENTER)_ uses the first two paramters as the x- and 
y-coordinates of the shape's center.  The next parameters are its
width and height.

_rectMode(RADIUS)_ also uses the first two parameters as the x- and
y-coordinates of the shape's center.  The next parameters are half
of the shapes width and height. 

The argument passed to _rectMode()_ must be written in ALL CAPS because
the constants _CENTER, RADIUS, CORNER, and CORNERS_ are defined this
way.


## point(p1, p2, p3)
Draws a single point in space.
A points default width is 1 pixel. To color a point, use the _stroke()_
function.  To change its width use the _strokeWeight_ function.  A point can't be filled, so the _fill()_ function will not affect the points color.

The version of _point()_ with two paramters allows the points location to
be set with its x- and y- coordinates, as in _point(10, 20)_

The version of _point()_ with three parameters allows the point to be 
drawn in 3D space with x-, y-, and z-coordinates, as in 
_point(10, 20, 30)_.  Doing so requires adding WEBGL argument to 
_createCanvas()_

The version of _point()_ with one parameter allos the points location
to be set with a _p5.Vector_ object

## quad(x1, y1, x2, y2, x3, y3, x4, y4, [z1, z2, seg1(2), seg2(2)])
Draws a quadrilateral (four sided shape).

Quadrilaterals include rectangles, squares, rhombuses, and trapezoids.  The first pair of parameters ```(x1,y1)``` set the quad's first point.  The next three pairs of parameters set the coordinates for its next three points ```(x2, y2), (x3, y3), (x4, y4)``` Points should be added in a clockwise or counter clockwise order.

The version of ```quad()``` with twelve parameters allows the quad to be drawn in 3D space.  Doing so requires adding the WEBGL argument to ```createCanvas()```.

The thirteenth and fourteenth parameters are optional.  In WEBGL mode, they set the number of segments used to draw the quadrilateral in the x- and y-directions.  They're both 2 by default.

## text(str, x, y, maxWidth, maxHeight)
Draws text to the canvas.

The first parameter _str_ is the text to be drawn.  The second and 
third parameters, x and y, set the coordinates of the text's bottom-left corner.  See _textAlign()_ for other ways to align text.

The fourth and fifth parameters, _maxWidth_ and _maxHeight_, are optional.  
They set the dimensions of the invisible rectangle containing the text. 
By default, they set its maximum width and height.  See _rectMode()_ for
other ways to define the rectangular text box.  Text will wrap to fit 
within the text box. Text outside of the box won't be drawn.

Text can be styled a few ways.  Call the _fill()_ function to set the
text's fill color.  Call _stroke()_ and _weight()_ to set the text's
outline. Call _textSize()_ and _textFont()_ to set the text' size 
and font, respectively.

*Note* WEBGL mode only supports fonts loaded with _loadFont().  Calling
_stroke()_ has no effect in WEBGL mode.

## triangle(x1, y1, x2, y2, x3, y3)
Draws a triangle

A triangle if a three-sided shape defined by three points.  The first two 
parameters specify the triangle's first point ```(x1, y1) ```. The middle two parameters specify its second point ```(x2, y2)```. And the last two parameters specify its third point ```(x3, y3)```.

import FreeCAD, FreeCADGui, Part, Sketcher

# Create a new document
doc = FreeCAD.newDocument("MyDrawing")

# Create a new sketch on the XY plane
sketch = doc.addObject('Sketcher::SketchObject', 'Sketch')
sketch.Placement = FreeCAD.Placement(FreeCAD.Vector(0,0,0),
                                     FreeCAD.Rotation(0,0,0,1))

# Example: draw a rectangle
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(0,0,0), FreeCAD.Vector(40,0,0)))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(40,0,0), FreeCAD.Vector(40,30,0)))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(40,30,0), FreeCAD.Vector(0,30,0)))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(0,30,0), FreeCAD.Vector(0,0,0)))

# Example: add a circle in the center
sketch.addGeometry(Part.Circle(FreeCAD.Vector(20,15,0), FreeCAD.Vector(0,0,1), 10))

doc.recompute()

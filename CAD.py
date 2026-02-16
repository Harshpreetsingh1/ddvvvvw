from pyautocad import Autocad, APoint

# Connect to AutoCAD and ensure a document is open
acad = Autocad(create_if_not_exists=True)
if acad.doc is None:
    print("No active document in AutoCAD. Please open a new drawing and run the code again.")
else:
    print("Drawing a basic square sofa with top, front, and side views with dimensions.")

    # Sofa dimensions
    seat_size = 100            # Seat square side length in mm
    armrest_height = 20        # Height of the armrest above the seat
    backrest_height = 60       # Total backrest height from ground
    seat_height = 30           # Height of the seat from ground

    # Offsets for separating views
    top_view_offset = APoint(0, 0)
    front_view_offset = APoint(150, 0)
    side_view_offset = APoint(300, 0)

    ### Top View ###
    # Outer square for the seat
    acad.model.AddLine(top_view_offset, APoint(top_view_offset.x + seat_size, top_view_offset.y))
    acad.model.AddLine(APoint(top_view_offset.x + seat_size, top_view_offset.y), APoint(top_view_offset.x + seat_size, top_view_offset.y + seat_size))
    acad.model.AddLine(APoint(top_view_offset.x + seat_size, top_view_offset.y + seat_size), APoint(top_view_offset.x, top_view_offset.y + seat_size))
    acad.model.AddLine(APoint(top_view_offset.x, top_view_offset.y + seat_size), top_view_offset)

    # Inner square to represent cushion detail
    cushion_inset = 10
    acad.model.AddLine(APoint(top_view_offset.x + cushion_inset, top_view_offset.y + cushion_inset), APoint(top_view_offset.x + seat_size - cushion_inset, top_view_offset.y + cushion_inset))
    acad.model.AddLine(APoint(top_view_offset.x + seat_size - cushion_inset, top_view_offset.y + cushion_inset), APoint(top_view_offset.x + seat_size - cushion_inset, top_view_offset.y + seat_size - cushion_inset))
    acad.model.AddLine(APoint(top_view_offset.x + seat_size - cushion_inset, top_view_offset.y + seat_size - cushion_inset), APoint(top_view_offset.x + cushion_inset, top_view_offset.y + seat_size - cushion_inset))
    acad.model.AddLine(APoint(top_view_offset.x + cushion_inset, top_view_offset.y + seat_size - cushion_inset), APoint(top_view_offset.x + cushion_inset, top_view_offset.y + cushion_inset))

    # Dimension for seat size
    acad.model.AddLine(APoint(top_view_offset.x, top_view_offset.y - 10), APoint(top_view_offset.x + seat_size, top_view_offset.y - 10))  # Dimension line
    acad.model.AddText(f"{seat_size} mm", APoint(top_view_offset.x + seat_size / 2 - 5, top_view_offset.y - 20), 5)  # Dimension text

    ### Front View ###
    # Seat outline
    acad.model.AddLine(front_view_offset, APoint(front_view_offset.x + seat_size, front_view_offset.y))
    acad.model.AddLine(APoint(front_view_offset.x + seat_size, front_view_offset.y), APoint(front_view_offset.x + seat_size, front_view_offset.y + seat_height))
    acad.model.AddLine(APoint(front_view_offset.x + seat_size, front_view_offset.y + seat_height), APoint(front_view_offset.x, front_view_offset.y + seat_height))
    acad.model.AddLine(APoint(front_view_offset.x, front_view_offset.y + seat_height), front_view_offset)

    # Armrests
    acad.model.AddLine(APoint(front_view_offset.x, front_view_offset.y + seat_height), APoint(front_view_offset.x, front_view_offset.y + seat_height + armrest_height))
    acad.model.AddLine(APoint(front_view_offset.x + seat_size, front_view_offset.y + seat_height), APoint(front_view_offset.x + seat_size, front_view_offset.y + seat_height + armrest_height))

    # Dimension for seat height
    acad.model.AddLine(APoint(front_view_offset.x - 10, front_view_offset.y), APoint(front_view_offset.x - 10, front_view_offset.y + seat_height))  # Dimension line
    acad.model.AddText(f"{seat_height} mm", APoint(front_view_offset.x - 20, front_view_offset.y + seat_height / 2), 5)  # Dimension text

    # Dimension for armrest height
    acad.model.AddLine(APoint(front_view_offset.x - 20, front_view_offset.y + seat_height), APoint(front_view_offset.x - 20, front_view_offset.y + seat_height + armrest_height))  # Dimension line
    acad.model.AddText(f"{armrest_height} mm", APoint(front_view_offset.x - 30, front_view_offset.y + seat_height + armrest_height / 2), 5)  # Dimension text

    ### Side View ###
    # Seat depth and backrest
    acad.model.AddLine(side_view_offset, APoint(side_view_offset.x, side_view_offset.y + seat_height))
    acad.model.AddLine(APoint(side_view_offset.x, side_view_offset.y + seat_height), APoint(side_view_offset.x + seat_size, side_view_offset.y + seat_height))
    acad.model.AddLine(APoint(side_view_offset.x + seat_size, side_view_offset.y + seat_height), APoint(side_view_offset.x + seat_size, side_view_offset.y + backrest_height))
    acad.model.AddLine(APoint(side_view_offset.x + seat_size, side_view_offset.y + backrest_height), side_view_offset)

    # Dimension for backrest height
    acad.model.AddLine(APoint(side_view_offset.x + seat_size + 10, side_view_offset.y), APoint(side_view_offset.x + seat_size + 10, side_view_offset.y + backrest_height))  # Dimension line
    acad.model.AddText(f"{backrest_height} mm", APoint(side_view_offset.x + seat_size + 15, side_view_offset.y + backrest_height / 2), 5)  # Dimension text

    # Save the drawing
    save_path = r"C:\Auto CAD\sofa_design1.dwg"  # Replace with the desired path
    acad.doc.SaveAs('C:\Auto CAD\sofa_design1.dwg')

    print("Drawing with dimensions saved as sofa_design1.dwg!")

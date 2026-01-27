from PIL import Image
import os

def black_to_transparent(image_path, output_path, threshold=30):
    """
    Replace black / near-black pixels with transparent background.
    """

    img = Image.open(image_path).convert("RGBA")
    pixels = img.getdata()

    new_pixels = []
    for r, g, b, a in pixels:
        if r < threshold and g < threshold and b < threshold:
            new_pixels.append((r, g, b, 0))  # transparent
        else:
            new_pixels.append((r, g, b, a))

    img.putdata(new_pixels)
    img.save(output_path, "PNG")


# ===== PROCESS Picture1 to Picture8 =====
for i in range(1, 9):
    # Try PNG first, then JPG
    png_path = f"Picture{i}.png"
    jpg_path = f"Picture{i}.jpg"

    if os.path.exists(png_path):
        input_file = png_path
    elif os.path.exists(jpg_path):
        input_file = jpg_path
    else:
        print(f"Picture{i} not found, skipping...")
        continue

    output_file = f"Picture{i}_transparent.png"
    black_to_transparent(input_file, output_file)

    print(f"✔ Converted: {input_file} → {output_file}")

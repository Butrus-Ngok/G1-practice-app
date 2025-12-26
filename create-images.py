#!/usr/bin/env python3
"""
CREATE ALL IMAGES FOR G1 PRACTICE TEST
This script creates placeholder images for all 77 road signs and 104 rules questions
"""

from PIL import Image, ImageDraw, ImageFont
import os
import json

# Create directories
os.makedirs("images/signs", exist_ok=True)
os.makedirs("images/rules", exist_ok=True)

# Colors
COLORS = {
    'blue': (37, 99, 235),
    'green': (16, 185, 129),
    'red': (239, 68, 68),
    'yellow': (245, 158, 11),
    'gray': (229, 231, 235),
    'dark': (30, 41, 59)
}

def create_road_sign_image(filename, sign_number):
    """Create a road sign placeholder image"""
    img = Image.new('RGB', (400, 300), color='white')
    draw = ImageDraw.Draw(img)
    
    # Add border
    draw.rectangle([10, 10, 390, 290], outline=COLORS['blue'], width=3)
    
    # Add sign number
    try:
        font_large = ImageFont.truetype("arial.ttf", 48)
        font_small = ImageFont.truetype("arial.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Draw sign shape (common shapes)
    if sign_number <= 20:
        # Warning signs (diamond)
        points = [(200, 50), (350, 200), (200, 350), (50, 200)]
        draw.polygon(points, fill=COLORS['yellow'], outline=COLORS['dark'])
    elif sign_number <= 40:
        # Regulatory signs (circle)
        draw.ellipse([100, 75, 300, 275], fill=COLORS['red'], outline=COLORS['dark'])
    elif sign_number <= 60:
        # Information signs (rectangle)
        draw.rectangle([100, 100, 300, 200], fill=COLORS['green'], outline=COLORS['dark'])
    else:
        # Other signs (pentagon for school zone, etc.)
        points = [(200, 50), (350, 150), (300, 275), (100, 275), (50, 150)]
        draw.polygon(points, fill=COLORS['yellow'], outline=COLORS['dark'])
    
    # Add sign number text
    text = f"Sign {sign_number}"
    bbox = draw.textbbox((0, 0), text, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (400 - text_width) // 2
    y = (300 - text_height) // 2
    draw.text((x, y), text, fill='white', font=font_large)
    
    # Add label
    draw.text((150, 260), "Road Sign", fill=COLORS['blue'], font=font_small)
    
    # Save
    img.save(f"images/signs/{sign_number}.png")
    return f"images/signs/{sign_number}.png"

def create_rules_image(filename, rule_number):
    """Create a rules question placeholder image"""
    img = Image.new('RGB', (400, 300), color='white')
    draw = ImageDraw.Draw(img)
    
    # Add decorative border
    draw.rectangle([10, 10, 390, 290], outline=COLORS['green'], width=3, fill=COLORS['gray'])
    
    try:
        font_large = ImageFont.truetype("arial.ttf", 32)
        font_small = ImageFont.truetype("arial.ttf", 18)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Add icon based on category
    categories = ['laws', 'safety', 'penalties', 'conditions', 'maneuvers']
    category = categories[(rule_number - 1) % len(categories)]
    
    # Draw category icon
    icon_colors = {
        'laws': COLORS['blue'],
        'safety': COLORS['green'],
        'penalties': COLORS['red'],
        'conditions': COLORS['yellow'],
        'maneuvers': COLORS['dark']
    }
    
    # Draw circle with category color
    draw.ellipse([150, 80, 250, 180], fill=icon_colors[category], outline='white', width=2)
    
    # Add category text
    category_text = category.upper()
    bbox = draw.textbbox((0, 0), category_text, font=font_small)
    text_width = bbox[2] - bbox[0]
    x = (400 - text_width) // 2
    draw.text((x, 120), category_text, fill='white', font=font_small)
    
    # Add rule number
    rule_text = f"Rule {rule_number}"
    bbox = draw.textbbox((0, 0), rule_text, font=font_large)
    text_width = bbox[2] - bbox[0]
    x = (400 - text_width) // 2
    draw.text((x, 190), rule_text, fill=COLORS['dark'], font=font_large)
    
    # Add label
    draw.text((160, 250), "Rules Question", fill=COLORS['dark'], font=font_small)
    
    # Save
    img.save(f"images/rules/{rule_number}.png")
    return f"images/rules/{rule_number}.png"

def create_placeholder_image():
    """Create a generic placeholder image"""
    img = Image.new('RGB', (400, 300), color='white')
    draw = ImageDraw.Draw(img)
    
    # Add border
    draw.rectangle([10, 10, 390, 290], outline=COLORS['gray'], width=3)
    
    try:
        font = ImageFont.truetype("arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    # Add text
    text = "Image Placeholder"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (400 - text_width) // 2
    y = (300 - text_height) // 2
    draw.text((x, y), text, fill=COLORS['dark'], font=font)
    
    # Save
    img.save("images/placeholder.png")
    print("Created: images/placeholder.png")

def main():
    print("Creating all images for G1 Practice Test...")
    print("=" * 50)
    
    # Create placeholder
    create_placeholder_image()
    
    # Create 77 road sign images
    print("\nCreating 77 road sign images...")
    for i in range(1, 78):
        create_road_sign_image(f"{i}.png", i)
        if i % 10 == 0:
            print(f"  Created {i}/77 road sign images")
    
    # Create 44 rules images (we need up to 44 based on the data)
    print("\nCreating rules question images...")
    for i in range(1, 45):
        create_rules_image(f"{i}.png", i)
        if i % 10 == 0:
            print(f"  Created {i}/44 rules images")
    
    print("\n" + "=" * 50)
    print("ALL IMAGES CREATED SUCCESSFULLY!")
    print("Total images created:")
    print(f"  - images/signs/: 77 road sign images")
    print(f"  - images/rules/: 44 rules question images")
    print(f"  - images/placeholder.png: 1 placeholder image")
    print("\nFolder structure created:")
    print("  images/")
    print("  ├── signs/ (77 images)")
    print("  ├── rules/ (44 images)")
    print("  └── placeholder.png")
    print("\nYour G1 Practice Test is READY TO USE!")

if __name__ == "__main__":
    main()

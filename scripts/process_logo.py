#!/usr/bin/env python3
import sys
import os
import requests
import io

try:
    from PIL import Image
except ImportError:
    print("Dependencies missing. Please install: pip install Pillow requests")
    sys.exit(1)

API_KEY = "3vpDp7NNMrx53R9QKE8pRJLu"

def process_logo(input_path, output_path):
    print(f"Processing logo: {input_path}")
    
    # 1. Remove background using remove.bg API
    print("Removing background via remove.bg API...")
    try:
        response = requests.post(
            'https://api.remove.bg/v1.0/removebg',
            files={'image_file': open(input_path, 'rb')},
            data={'size': 'auto'},
            headers={'X-Api-Key': API_KEY},
        )
        if response.status_code == requests.codes.ok:
            no_bg_bytes = response.content
        else:
            print("Error from remove.bg:", response.status_code, response.text)
            return False
    except Exception as e:
        print(f"API Error: {e}")
        return False
        
    # 2. Trim whitespace using Pillow
    print("Trimming whitespace...")
    try:
        img = Image.open(io.BytesIO(no_bg_bytes)).convert("RGBA")
        bbox = img.getbbox()
        
        if bbox:
            trimmed_img = img.crop(bbox)
            trimmed_img.save(output_path, "PNG")
            print(f"Successfully processed and saved to: {output_path}")
            return True
        else:
            print("Error: Image is completely transparent after background removal.")
            return False
    except Exception as e:
        print(f"Image processing error: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python process_logo.py <input_path> <output_path>")
        sys.exit(1)
        
    in_file = sys.argv[1]
    out_file = sys.argv[2]
    
    process_logo(in_file, out_file)



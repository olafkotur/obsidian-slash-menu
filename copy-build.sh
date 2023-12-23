#!/bin/bash

# Check if vault directory parameter is provided
if [ -z "$1" ]
then
  echo "No vault directory provided"
  exit 1
fi

# Extract directory name from manifest.json
dir_name=$(jq -r .id manifest.json)

# Full path to the new directory
new_dir="$1/.obsidian/plugins/$dir_name"

# Remove directory if it exists, then create a new one
rm -rf "$new_dir"
mkdir -p "$new_dir"

# Copy files to the new directory
cp ./build/main.js "$new_dir"
cp ./manifest.json "$new_dir"
cp ./styles.css "$new_dir"

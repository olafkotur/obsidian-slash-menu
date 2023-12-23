# Obsidian Plugin Template

This fork of the original [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin). This repository serves as a starting point for creating your own Obsidian plugins. For comprehensive documentation and guidance, please refer to the original repository provided by the author.

## Template Features

This sample plugin demonstrates some of the basic functionalities that the Obsidian plugin API can offer:

- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and outputs 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.

## Running the Project

To get this project up and running, follow these steps:

1. Install the project dependencies:
   ```bash
   yarn install
   ```
2. Start the project with:
   ```bash
   yarn start
   ```
   Note that running this command will automatically copy the plugin into your obsidian plugin directory
3. To move `main.js`, `manifest.json`, and `styles.css` into the plugin folder within your Obsidian vault, run:
   ```bash
   yarn copy-build
   ```
   Replace the default vault directory with yours within `package.json` e.g. `~/Documents/obsidian/your-vault`.
   The name of the plugin is determined by the `id` within `manifest.json`.

# Obsidian Slash Menu

This project was created using the template from [olafkotur/obsidian-plugin-template](https://github.com/olafkotur/obsidian-plugin-template) repo.

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

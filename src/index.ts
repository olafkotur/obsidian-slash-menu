import { Editor, MarkdownView, Plugin } from 'obsidian';
import { PluginSettings } from './typings';
import { DEFAULT_SETTINGS } from './const';
import { createModal, createNotice, createSettingTab } from './utils';

export default class SamplePlugin extends Plugin {
  settings: PluginSettings;

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async onload() {
    await this.loadSettings();

    // this creates an icon in the left ribbon.
    const ribbonIconEl = this.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
      createNotice({ msg: "You've been noticed" });
    });

    // perform additional things with the ribbon
    ribbonIconEl.addClass('my-plugin-ribbon-class');

    // This adds a status bar item to the bottom of the app. Does not work on mobile apps.
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText('Status Bar Text');

    // adds a simple modal that can be triggered from anywhere
    this.addCommand({
      id: 'open-sample-modal',
      name: 'open-sample-modal',
      callback: () => {
        const modal = createModal({
          app: this.app,
          onOpen: (element) => element.setText('Hello World'),
          onClose: (element) => element.empty(),
        });

        modal.open();
      },
    });

    // adds an editor command that can perform some operation on the current editor instance
    this.addCommand({
      id: 'sample-editor-command',
      name: 'Sample editor command',
      editorCallback: (editor: Editor, view: MarkdownView) => {
        console.log(editor.getSelection());
        editor.replaceSelection('Sample Editor Command');
      },
    });

    const sampleSetting = createSettingTab({
      app: this.app,
      plugin: this,
      tab: { key: 'sample', name: 'Sample Setting', description: 'Example Setting', text: { placeholder: 'Sample' } },
    });
    this.addSettingTab(sampleSetting);

    // if the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
    // using this function will automatically remove the event listener when this plugin is disabled.
    this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
      console.log('click', evt);
    });

    // when registering intervals, this function will automatically clear the interval when the plugin is disabled.
    this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
  }

  onunload() {}
}

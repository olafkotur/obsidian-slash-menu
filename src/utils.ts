import { App, Modal, Notice, PluginSettingTab, Setting } from 'obsidian';
import { PluginSettings, SettingsTab } from './typings';
import SamplePlugin from './index';

export const createNotice = ({ msg }: { msg: string }) => {
  return new Notice(msg);
};

export const createModal = ({
  app,
  onOpen,
  onClose,
}: {
  app: App;
  onOpen: (element: HTMLElement) => void;
  onClose: (element: HTMLElement) => void;
}) => {
  class CustomModal extends Modal {
    constructor(app: App) {
      super(app);
    }

    onOpen() {
      const { contentEl } = this;
      onOpen(contentEl);
    }

    onClose() {
      const { contentEl } = this;
      onClose(contentEl);
    }
  }

  return new CustomModal(app);
};

export const createSettingTab = ({ app, plugin, tab }: { app: App; plugin: SamplePlugin; tab: SettingsTab }) => {
  class CustomSettingTab extends PluginSettingTab {
    plugin: SamplePlugin;

    constructor(app: App, plugin: SamplePlugin) {
      super(app, plugin);
      this.plugin = plugin;
    }

    display() {
      const { containerEl } = this;

      containerEl.empty();

      const setting = new Setting(containerEl);
      setting.setName(tab.name);
      setting.setDesc(tab.description);

      if (tab.text != null) {
        setting.addText((text) =>
          text
            .setPlaceholder(tab.text!.placeholder)
            .setValue(this.plugin.settings[tab.key as keyof PluginSettings])
            .onChange(async (value) => {
              this.plugin.settings[tab.key as keyof PluginSettings] = value;
              await this.plugin.saveSettings();
            }),
        );
      }
    }
  }

  return new CustomSettingTab(app, plugin);
};

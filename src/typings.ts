export interface PluginSettings {
  mySetting: string;
}

export interface SettingsTab {
  key: string;
  name: string;
  description: string;
  text?: {
    placeholder: string;
  };
}

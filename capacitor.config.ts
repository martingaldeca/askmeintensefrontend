import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.askmeintense.app',
  appName: 'AskMeIntense',
  webDir: 'out',
  android: {
    allowMixedContent: true,
  },
};

export default config;

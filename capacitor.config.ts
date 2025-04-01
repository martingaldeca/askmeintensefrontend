import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.askmeintense.app',
  appName: 'AskMeIntense',
  webDir: 'out',
  // If you are debugging with your local you can uncomment this
  // server: {
  //   cleartext: true, // Allow HTTP connections
  // },
  android: {
    allowMixedContent: true,
  },
};

export default config;

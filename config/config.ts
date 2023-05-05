import { defineConfig } from '@umijs/max';
import { defaultConfig } from './defaultConfig';

export default defineConfig({
  ...defaultConfig,
  define: {
    BASE_URL: 'http://127.0.0.1'
  }
});

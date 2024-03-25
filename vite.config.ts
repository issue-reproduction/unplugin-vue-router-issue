import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueRouter from "unplugin-vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      /* options */
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
  ],
});

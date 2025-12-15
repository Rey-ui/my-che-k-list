import { defineConfig } from "vite";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import SortCss from "postcss-sort-media-queries";

export default defineConfig({
  base: "/my-check-list/",
  root: "src",
  build: {
    outDir: "../dist",
  },
});

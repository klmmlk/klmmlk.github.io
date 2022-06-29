import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "丑八怪住进ICU",
  description: "我多么想和你见一面",

  base: "/",

  theme,

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      isSearchable: (page) => page.path !== '/',
      },
    }),
  ],
});
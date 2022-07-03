import { sidebar } from "vuepress-theme-hope";
import { code } from "./code";
import { vue } from "./vue";
import { css, html, jquery, website } from "./website";
import {
  dart,
  javascript,
  language,
  markdown,
  python,
  typescript,
} from "./language";
import { miniapp } from "./mini-app";

export const userSidebar = sidebar({
  "/code/": code,

  "/code/website/jquery/": jquery,

  "/code/website/html/": html,

  "/code/website/css/": css,

  "/code/website/": website,

  "/code/vue/": vue,

  "/code/node-js/": "structure",

  "/code/mini-app/": miniapp,

  "/code/language/typescript/": typescript,

  "/code/language/python/": python,

  "/code/language/markdown/": markdown,

  "/code/language/js/": javascript,
});

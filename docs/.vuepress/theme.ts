import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { userSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  // iconAssets: "iconfont",
  // 主题色选择器
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  author: {
    name: "Jiong.Lin",
    url: "https://JokerIn.ICU",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  // docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: userSidebar,

  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022015942号-1</a>  <span>本页浏览量:</span> <span class="waline-pageview-count" />',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    timeline: "与你再次相逢",
    description: "银河系极值矛盾体",
    // intro: "/intro.html",
    avatar: "/avatar.jpg",
    roundAvatar: true,
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:linlinlin@JokerIn.ICU",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/klmmlk",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      Weibo: "https://weibo.com/u/1357279153",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    //  @vuepress/plugin-git 插件，展示最后一次编译时间及贡献者
    git: false,
    
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      /*       provider: "Giscus",
            repo: "vuepress-theme-hope/giscus-discussions",
            repoId: "R_kgDOG_Pt2A",
            category: "Announcements",
            categoryId: "DIC_kwDOG_Pt2M4COD69", */

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://vercel.jokerin.icu/",
      wordLimit: 300,
      pageview: true,

    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

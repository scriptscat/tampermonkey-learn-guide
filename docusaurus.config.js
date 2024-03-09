// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { themes } from "prism-react-renderer";
const path = require("path");

const { github: lightCodeTheme, dracula: darkCodeTheme } = themes;
import { redirects, createRedirects } from "./src/plugins/redirect.js";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "油猴开发指南",
  tagline: "更适合国人体质的油猴教程",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://learn.scriptcat.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scriptscat", // Usually your GitHub org/user name.
  projectName: "tampermonkey-learn-guide", // Usually your repo name.

  trailingSlash: true,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  themes: [
    "@docusaurus/theme-live-codeblock",
    "@docusaurus/theme-mermaid",
    // PWA 支持
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: true,
    //     offlineModeActivationStrategies: [
    //       'appInstalled',
    //       'standalone',
    //       'queryString',
    //     ],
    //     pwaHead: [
    //       {
    //         tagName: 'link',
    //         rel: 'icon',
    //         href: '/img/docusaurus.png',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'manifest',
    //         href: '/manifest.json', // your PWA manifest
    //       },
    //       // {
    //       //   tagName: 'meta',
    //       //   name: 'theme-color',
    //       //   content: 'rgb(37, 194, 160)',
    //       // },
    //     ],
    //   },
    // ],
    [
      // 离线搜索插件
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        .../** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          language: ["en", "zh"],
          zhUserDictPath: require.resolve("./src/zh-dict.txt"),
          docsRouteBasePath: "/",
          highlightSearchTermsOnTargetPage: true,
          ignoreFiles: ["感谢名单", "赞助名单"],
        }),
      },
    ],
    // 高亮对比
    path.resolve(
      __dirname,
      "./src/plugins/docusaurus-plugin-highlight-comparer"
    ),
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        redirects,
        createRedirects,
      }),
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          admonitions: {
            keywords: ["try"],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          filename: "sitemap.xml",
        },
        blog: false, // 仅文档模式
      }),
    ],
  ],
  scripts: [
    {
      src: "https://hm.baidu.com/hm.js?658917ec2a9079c8ea7cdf26958515d6",
      defer: true,
    },
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "油猴开发指南",
        logo: {
          alt: "",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "教程目录",
          },
          {
            href: "https://github.com/scriptscat/userscript-learn-guide",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 油猴中文网 (Inc Tampermonkey Chinese Group).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  markdown: {
    mermaid: true,
    remarkRehypeOptions:{
      footnoteLabel: "脚注",
      footnoteBackLabel(id, id2) {
        return (
          '回到脚注 ' +
          (id + 1) +
          (id2 > 1 ? '-' + id2 : '')
        )
      }
    }
  },
};

export default config;

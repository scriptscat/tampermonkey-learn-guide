// 自定义重定向
const custom = [
  {
    from: "/docs/basics/Jquery引用",
    to: "/实用知识库/引用库使用/Jquery引用",
  },
];

// 根目录文件
const roots = ["/感谢名单", "/赞助名单", "/简介"].map((item) => ({
  to: item,
  from: `/docs${item}`,
}));

// 分类目录文件
const categories = [
  {
    from: "/油猴入门篇",
    to: "/油猴教程/入门篇",
  },
  {
    from: "/油猴中级篇",
    to: "/油猴教程/中级篇",
  },
  {
    from: "/油猴实战篇",
    to: "/油猴教程/实战篇",
  },
  {
    from: "/引用库使用",
    to: "/实用知识库/引用库使用",
  },
  {
    from: "/javascript-知识篇",
    to: "/实用知识库/JavaScript 知识篇",
  },
  {
    from: "/promise-知识",
    to: "/实用知识库/JavaScript 知识篇/Promise 知识",
  },
  {
    from: "/mutationobserve-知识",
    to: "/实用知识库/JavaScript 知识篇/MutationObserve 知识",
  },
  {
    from: "/常见问题",
    to: "/实用知识库/常见问题",
  },
].map((item) => ((item.from = "/docs/category" + item.from), item));

const basics = [
  {
    from: "/脚本往页面上添加新元素",
    to: "/使用脚本向页面上添加新元素",
  },
];

const pathRule = [
  {
    name: "MutationObserve 知识",
    redirect: "/docs/jsKnowledge/MutationObserve/",
  },
  {
    name: "Promise 知识",
    redirect: "/docs/jsKnowledge/Promise/",
  },
  {
    name: "JavaScript 知识篇",
    redirect: "/docs/jsKnowledge/",
  },
  {
    name: "入门篇",
    redirect: "/docs/basics/",
    ruleArray: basics,
  },
  {
    name: "引用库使用",
    redirect: "/docs/library/",
  },
  {
    name: "中级篇",
    redirect: "/docs/middle/",
  },
  {
    name: "实战篇",
    redirect: "/docs/practice/",
  },
  {
    name: "常见问题",
    redirect: "/docs/question/",
  },
];

function matchPath(path) {
  const fileName = path
    .split("/")
    .filter((a) => a)
    .pop();
  const gotPath = pathRule.find(
    ({ name }) => path.match(name) && fileName !== name
  );
  if (!gotPath) return undefined;
  if (
    gotPath.ruleArray &&
    gotPath.ruleArray.find(
      ({ from }) =>
        from
          .split("/")
          .filter((a) => a)
          .pop() === fileName
    )
  )
    return undefined;
  return gotPath.redirect + fileName;
}

/**
 * 根据新路径返回重定向替换规则
 * @param {string} existingPath - 新路径(to)
 * @returns {string[] | string | null | undefined}
 * 原路径字符串(或字符串数组)，(from)，
 * 返回 `falsy` 表示不创建重定向
 */
function createRedirects(existingPath) {
  return matchPath(existingPath);
  // const fileName = existingPath
  //   .split("/")
  //   .filter((a) => a)
  //   .pop();
  // if (existingPath.match("入门篇")) {
  //   if (
  //     // 根目录不重复创建
  //     fileName === "入门篇" ||
  //     // 已经单独处理的不重复创建
  //     basics.find(
  //       ({ from }) =>
  //         from
  //           .split("/")
  //           .filter((a) => a)
  //           .pop() === fileName
  //     )
  //   )
  //     return undefined;
  //   return "/docs/basics/" + fileName;
  // } else if (existingPath.match("MutationObserve 知识")) {
  //   // 根目录不重复创建
  //   if (fileName === "MutationObserve 知识") return undefined;
  //   return "/docs/jsKnowledge/MutationObserve/" + fileName;
  // } else if (existingPath.match("Promise 知识")) {
  //   // 根目录不重复创建
  //   if (fileName === "Promise 知识") return undefined;
  //   return "/docs/jsKnowledge/Promise/" + fileName;
  // } else if (existingPath.match("JavaScript 知识篇")) {
  //   // 根目录不重复创建
  //   if (fileName === "JavaScript 知识篇") return undefined;
  //   return "/docs/jsKnowledge/" + fileName;
  // } else if (existingPath.match("引用库使用")) {
  //   // 根目录不重复创建
  //   if (fileName === "引用库使用") return undefined;
  //   return "/docs/library/" + fileName;
  // } else if (existingPath.match("中级篇")) {
  //   // 根目录不重复创建
  //   if (fileName === "中级篇") return undefined;
  //   return "/docs/middle/" + fileName;
  // } else if (existingPath.match("实战篇")) {
  //   // 根目录不重复创建
  //   if (fileName === "实战篇") return undefined;
  //   return "/docs/practice/" + fileName;
  // } else if (existingPath.match("常见问题")) {
  //   // 根目录不重复创建
  //   if (fileName === "常见问题") return undefined;
  //   return "/docs/question/" + fileName;
  // }
  // return undefined;
}

const redirects = [
  ...roots,
  ...categories,
  ...basics.map(({ from, to }) => ({
    from: "/docs/basics" + from,
    to: "/油猴教程/入门篇" + to,
  })),
  ...custom,
];

module.exports = {
  redirects,
  createRedirects,
};

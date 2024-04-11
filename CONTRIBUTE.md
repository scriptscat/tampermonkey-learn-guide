## 文件说明

文章以 `Markdown` 格式( `.md` 文件)按照文件层级放在 `docs` 文件夹下。

文件夹的层级关系就是网站左侧导航栏的层级关系，文件夹的名字默认是导航栏的名字。如果想要修改导航栏的名字，可以在 `md` 文件的一级标题(`# xxx`)定义。

如果当前层级下没有 `md` 文件，建议在当前层级下创建一个 `_category_.json` 文件，即将当前文件夹作为一个分类，然后在该文件中定义 `label`、`position`和`link`。
- `label` 为导航栏中显示的名字
- `position` 为导航栏的顺序
- `link` 为导航栏的链接

以`油猴教程/入门篇`为例，`_category_.json` 文件的内容为：

```json
{
  "label": "入门篇",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "油猴脚本开发的初步入门知识，你将会了解最基础的知识并尝试编写属于自己的脚本",
    "slug": "油猴教程/入门篇"
  }
}
```

> [!NOTE]
> 其中，`"slug": "油猴教程/入门篇"`应修改为当前路径，否则默认链接为 <s>`category/xxx`</s>。

`md` 文件的 `header` 中的常用参数说明：
- `sidebar_position` 属性会被用作文章的顺序
- `description` 属性会被用作网页的描述
- `slug` 属性为网页生成后的链接

## 特性

使用 `mdx` 语法，可以在 `md` 文件中使用 `jsx` 语法，例如：

### BrowserOnly

使用 `BrowserOnly` 组件，[例子](docs\01.油猴教程\01.入门篇\07.使用脚本向页面上添加新元素.md)

````
```mdx-code-block
import BrowserOnly from '@docusaurus/BrowserOnly';
```
````

### Admonitions

使用 `:::` 标记，可以自定义内容或者组件，[例子](docs\01.油猴教程\01.入门篇\07.使用脚本向页面上添加新元素.md)

```
:::xxx 标题

这里是内容或者组件，

xxx可以是：tip、note、warning、danger、info

:::
```

> [!NOTE]
> 相关说明: [docusaurus](https://docusaurus.io/docs/markdown-features/admonitions)

### Tabs

使用 `Tabs` 组件，可以自定义标签页组件，文档见 [docusaurus](https://docusaurus.io/docs/markdown-features/tabs)，[本项目例子](docs\简介.md)

````
```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```
````

> [!NOTE]
> 相关说明: [docusaurus](https://docusaurus.io/docs/markdown-features/tabs)
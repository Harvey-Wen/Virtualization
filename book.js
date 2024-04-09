module.exports = {

  // 书籍基本信息
  title: "Virtualization Book", // 书名
  author: "Harvey Wen", // 作者

  // 书籍元数据信息
  description: "Personal notes. Introduce virtualization technology related content, including Docker, Docker Compose, Docker Warm, and k8s.", // 描述
  isbn: "book NO.", // 国际标准书号
  publisher: "Harvey Wen", // 出版社
  year: "2017", // 出版年份
  language: "English", // 语言
  subject: "Virtualization", // 主题
  keywords: "Virtualization, Docker, K8S", // 关键词
  cover: "cover.jpg", // 封面图片文件名
  copyright: "Harvey Wen", // 版权声明
  license: "MIT", // 授权许可协议
  version: "1.0", // 版本号
  xref: "true", // 是否启用交叉引用（具体含义取决于应用场景）

  // 书籍封面（用于PDF导出）
  cover: "cover.jpg",

  // PDF基础路径，存储PDF文件的位置（当前注释掉）
  // basePath: "book",

  // 插件列表
  plugins: [
	// 注意这些插件使用之前都是需要安装的，可以根据自己的需要的自行安装，手动添加其名字到这里。
    // 注意这里的名字和安装的时候的名字关系需要注意一下。比如“code” ，安装时候的名字是 ‘npm install gitbook-plugin-code’ 前面都有一个前缀 “gitbook-plugin-”
    "-lunr",		// -lunr 就是不用这个
    "-search",		// -search 就是不用这个
    "search-pro",	// 搜索的插件信息，需要配合上面的 lunr 和 search 一起使用，搜索支持高亮显示
    "code",			// 代码部分，会显示行号，以及右上角是否可以复制的按钮，下面的PluginsConfig中设置这些信息。
    "expandable-chapters",	// 左边的目录信息是否可以折叠的
    "back-to-top-button",	// 右下角的直接返回顶部的按钮
  ],

  // 插件配置项
  pluginsConfig: {
    code: {
      copyButton: true, // 是否可复制按钮
    },
  },

  // 自定义变量区域
  variables: {

    // 可在此处定义和添加自定义变量

  },
};

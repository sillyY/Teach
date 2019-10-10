module.exports = {
  base: '/Teach/',
  title: 'Teach',
  description: '错题集',
  themeConfig: {
    repo: 'sillyY/Teach',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '错题集',
        link: '/error/'
      }
    ],
    sidebar: {
      '/error/': [
        {
          title: '错题集',
          collapsable: false,
          children: [
            ['./chunk', 'chunk函数解析'],
          ]
        }
      ]
    }
  }
}
